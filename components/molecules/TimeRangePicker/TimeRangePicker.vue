<template>
  <GenericRangePicker
    input-type="time"
    :from-label="t('sorting.time.from')"
    :from-value="startTime"
    :to-label="t('sorting.time.until')"
    :to-value="endTime"
    icon="schedule"
    type="time"
    :rules="{
      valid: helpers.withMessage(validMessage, isValid),
      isStartBeforeEndTime: helpers.withMessage(
        startBeforeEndMessage,
        isStartBeforeEndTime,
      ),
    }"
    @update:from-value="startTime = $event"
    @update:to-value="endTime = $event"
  />
</template>

<script setup lang="ts">
import { helpers } from '@vuelidate/validators'

const { t } = useI18n()

const startTime = ref('00:00')
const endTime = ref('23:59')

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
  const [startHours, startMinutes] = startTime.value.split(':').map(Number)
  const [endHours, endMinutes] = endTime.value.split(':').map(Number)

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
</script>
