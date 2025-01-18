<template>
  <GenericRangePicker
    input-type="time"
    :from-label="t('sorting.time.from')"
    from-value="00:00"
    :to-label="t('sorting.time.until')"
    to-value="23:59"
    icon="schedule"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
