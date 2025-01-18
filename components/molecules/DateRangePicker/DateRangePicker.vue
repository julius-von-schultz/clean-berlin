<template>
  <GenericRangePicker
    input-type="date"
    :from-label="$t('sorting.date.from')"
    :from-value="currentDate"
    :to-label="$t('sorting.date.until')"
    :to-value="targetDate"
    icon="date_range"
  />
</template>

<script setup lang="ts">
const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0]
}

const currentDate = computed(() => formatDate(new Date()))

const targetDate = computed(() => {
  const date = new Date()
  date.setUTCFullYear(date.getUTCFullYear() + 2)
  return formatDate(date)
})
</script>
