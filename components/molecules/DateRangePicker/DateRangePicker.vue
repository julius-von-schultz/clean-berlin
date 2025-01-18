<template>
  <GenericRangePicker
    input-type="date"
    :from-label="$t('sorting.date.from')"
    :from-value="currentDate"
    :to-label="$t('sorting.date.until')"
    :to-value="targetDate"
    icon="date_range"
    :rules="{
      valid: helpers.withMessage(validMessage, isValid),
      present: helpers.withMessage(pastMessage, isNotInThePast),
      startBeforeEndDate: helpers.withMessage(startBeforeEndMessage, isStartBeforeEndDate),
    }"
  />
</template>

<script setup lang="ts">
import { helpers } from '@vuelidate/validators'

const { t } = useI18n()

const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

const currentDate = computed(() => formatDate(new Date()))

const targetDate = computed(() => {
  const date = new Date()
  date.setUTCFullYear(date.getUTCFullYear() + 2)
  return formatDate(date)
})

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
  // Parse the dates into Date objects for comparison
  const start = new Date(currentDate.value);
  const end = new Date(targetDate.value);

  // TODO current and target date are the initial values. This check must be done with the model values

  console.log('*** isSmaller', start < end)

  return start < end; // Return true if startDate is before endDate
}

const validMessage = t('sorting.date.validMessage')
const pastMessage = t('sorting.date.pastMessage')
const startBeforeEndMessage = 'Check'
</script>
