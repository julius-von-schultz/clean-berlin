<template>
  <GenericRangePicker
    input-type="time"
    :from-label="t('sorting.time.from')"
    from-value="00:00"
    :to-label="t('sorting.time.until')"
    to-value="23:59"
    icon="schedule"
    :rules="{
      valid: helpers.withMessage(validMessage, isValid),
    }"
  />
</template>

<script setup lang="ts">
import { helpers } from '@vuelidate/validators'

const { t } = useI18n()

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

const validMessage = t('sorting.time.validMessage')
</script>
