<template>
  <div>
    <GenericRangePicker
      input-type="date"
      :from-label="$t('sorting.date.from')"
      :from-value="startDate"
      :to-label="$t('sorting.date.until')"
      :to-value="endDate"
      icon="date_range"
      :rules="{
        valid: helpers.withMessage(validMessage, isValid),
        present: helpers.withMessage(pastMessage, isNotInThePast),
        isStartBeforeEndDate: helpers.withMessage(
          startBeforeEndMessage,
          isStartBeforeEndDate,
        ),
      }"
      @update:from-value="startDate = $event"
      @update:to-value="endDate = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { helpers } from '@vuelidate/validators'

const { t } = useI18n()

const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

const getInitialEndDate = () => {
  const date = new Date()
  date.setUTCFullYear(date.getUTCFullYear() + 2)
  return formatDate(date)
}

const startDate = ref(formatDate(new Date()))
const endDate = ref(getInitialEndDate())

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
  // Parse the dates
  const start = new Date(startDate.value)
  const end = new Date(endDate.value)

  // Return true only if startDate is strictly before endDate
  return start <= end
}

const validMessage = t('sorting.date.validMessage')
const pastMessage = t('sorting.date.pastMessage')
const startBeforeEndMessage = t('sorting.date.startBeforeEndMessage')
</script>
