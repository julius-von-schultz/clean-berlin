<template>
  <GenericRangePicker
    input-type="time"
    :from-label="t('sorting.time.from')"
    :from-value="internalStartTime"
    :to-label="t('sorting.time.until')"
    :to-value="internalEndTime"
    icon="schedule"
    type="time"
    :rules="{
      valid: helpers.withMessage(validMessage, isValid),
      isStartBeforeEndTime: helpers.withMessage(
        startBeforeEndMessage,
        isStartBeforeEndTime,
      ),
    }"
    @update:from-value="updateStartTime($event)"
    @update:to-value="updateEndTime($event)"
  />
</template>

<script setup lang="ts">
import { helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useEventsStore } from '~/stores/events/events'

const { t } = useI18n()

const eventStore = useEventsStore()
const { startTime, endTime } = storeToRefs(eventStore)

const internalStartTime = ref(startTime.value)
const internalEndTime = ref(endTime.value)

const isValid = (value: string) => {
  const timeRegex = /^\d{2}:\d{2}$/ // Matches HH:mm format

  // Check if the input matches the regex
  if (!timeRegex.test(value)) {
    return false
  }

  // Extract hours and minutes and validate ranges
  const [hours, minutes] = value.split(':').map(Number)
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60
}

const isStartBeforeEndTime = () => {
  // Parse the hours and minutes from the time strings
  const [startHours, startMinutes] = internalStartTime.value
    .split(':')
    .map(Number)
  const [endHours, endMinutes] = internalEndTime.value.split(':').map(Number)

  // Compare times
  if (startHours < endHours) {
    return true // Start hour is earlier
  } else if (startHours === endHours && startMinutes <= endMinutes) {
    return true // Same hour, but start minute is earlier
  }

  return false // Start is not strictly before end
}

const validMessage = t('sorting.time.validMessage')
const startBeforeEndMessage = t('sorting.time.startBeforeEndMessage')

const v = useVuelidate()

const formHasNoErrors = computed(() => {
  v.value.$validate()
  return v.value.$errors.length + v.value.$silentErrors.length === 0
})

const updateStartTime = (event: string) => {
  internalStartTime.value = event
  if (formHasNoErrors.value) {
    startTime.value = event
  }
}

const updateEndTime = (event: string) => {
  internalEndTime.value = event
  if (formHasNoErrors.value) {
    endTime.value = event
  }
}
</script>
