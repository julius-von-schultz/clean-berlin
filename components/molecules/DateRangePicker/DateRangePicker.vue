<template>
  <div class="date-range-picker">
    <!-- <input id="birthday" type="date" name="birthday" :value="currentDate"> -->
    <span>{{ $t('sorting.from') }}</span>
    <InputField input-type="date" :model-value="currentDate" />
    <span>{{ $t('sorting.until') }}</span>
    <InputField input-type="date" :model-value="targetDate" />
  </div>
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

<style scoped>
.date-range-picker {
  @apply flex;
  @apply items-center;
  @apply gap-x-4;
  white-space: nowrap;
  @apply text-cb-grey-5;
}
</style>
