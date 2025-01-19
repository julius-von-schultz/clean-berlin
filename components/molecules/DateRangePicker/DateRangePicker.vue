<template>
  <GenericRangePicker
    input-type="date"
    :from-label="$t('sorting.date.from')"
    :from-value="internalStartDate"
    :to-label="$t('sorting.date.until')"
    :to-value="internalEndDate"
    icon="date_range"
    :rules="{
      valid: helpers.withMessage(validMessage, isValid),
      present: helpers.withMessage(pastMessage, isNotInThePast),
      isStartBeforeEndDate: helpers.withMessage(
        startBeforeEndMessage,
        isStartBeforeEndDate,
      ),
    }"
    @update:from-value="updateStartDate($event)"
    @update:to-value="updateEndDate($event)"
  />
</template>

<script setup lang="ts">
import { helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useEventsStore } from '~/stores/events/events'
const { t } = useI18n()

const eventStore = useEventsStore()
const { startDate, endDate } = storeToRefs(eventStore)

const internalStartDate = ref(startDate.value)
const internalEndDate = ref(endDate.value)

const isValid = (value: string) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/ // Matches YYYY-MM-DD format

  // Check if the input matches the regex
  if (!dateRegex.test(value)) {
    return false
  }

  // Split the input and validate the date components
  const [year, month, day] = value.split('-').map(Number)

  // Create a Date object and check if it matches the input
  const dateObj = new Date(year, month - 1, day) // Month is 0-indexed
  return (
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getDate() === day
  )
}

const isNotInThePast = (value: string) => {
  if (!isValid(value)) {
    return false // If the format is invalid, return false
  }

  const currentDate = new Date()
  const [year, month, day] = value.split('-').map(Number)
  const inputDate = new Date(year, month - 1, day) // Month is 0-indexed

  // Normalize dates to ignore time (compare only year, month, and day)
  currentDate.setHours(0, 0, 0, 0)
  inputDate.setHours(0, 0, 0, 0)

  return inputDate >= currentDate // Returns true if the input date is today or in the future
}

const isStartBeforeEndDate = () => {
  // Parse the date
  const start = new Date(internalStartDate.value)
  const end = new Date(internalEndDate.value)

  // Return true only if startDate is strictly before endDate
  return start <= end
}

const validMessage = t('sorting.date.validMessage')
const pastMessage = t('sorting.date.pastMessage')
const startBeforeEndMessage = t('sorting.date.startBeforeEndMessage')

const v = useVuelidate()

const formHasNoErrors = computed(() => {
  v.value.$validate()
  return v.value.$errors.length + v.value.$silentErrors.length === 0
})

const updateStartDate = (event: string) => {
  internalStartDate.value = event
  if (formHasNoErrors.value) {
    startDate.value = event
  }
}

const updateEndDate = (event: string) => {
  internalEndDate.value = event
  if (formHasNoErrors.value) {
    endDate.value = event
  }
}
</script>
