<template>
  <div class="sorting-bar">
    <CustomSelect
      v-model="selectedDateOption"
      :options="selectDateOptions"
      :placeholder="t('sorting.date.placeholderSorting')"
    />
    <CustomSelect
      v-model="selectedTimeOption"
      :options="selectTimeOptions"
      :placeholder="t('sorting.time.placeholderSorting')"
    />
    <CustomSelect
      v-model="selectedCreatedAtOption"
      :options="selectCreatedAtOptions"
      :placeholder="t('sorting.createdAt.placeholderSorting')"
    />
  </div>
</template>

<script setup>
const { t } = useI18n()

const selectDateOptions = [
  { value: 'date_asc', label: t('sorting.date.buttonAsc') },
  { value: 'date_desc', label: t('sorting.date.buttonDsc') },
]

const selectTimeOptions = [
  { value: 'time_asc', label: t('sorting.time.buttonAsc') },
  { value: 'time_desc', label: t('sorting.time.buttonDsc') },
]

const selectCreatedAtOptions = [
  { value: 'createdAt_asc', label: t('sorting.createdAt.buttonAsc') },
  { value: 'createdAt_desc', label: t('sorting.createdAt.buttonDsc') },
]

const selectedDateOption = ref(null)
const selectedTimeOption = ref(null)
const selectedCreatedAtOption = ref('createdAt_asc')
</script>
