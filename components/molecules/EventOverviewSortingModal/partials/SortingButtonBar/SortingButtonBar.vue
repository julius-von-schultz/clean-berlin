<template>
  <div class="sorting-bar">
    <CustomSelect
      v-model="selectedOption"
      :options="selectOptions"
      :placeholder="t('sorting.sortSelectPlaceholder')"
    />
  </div>
</template>

<script setup>
const { t } = useI18n()

const selectOptions = [
  { value: 'createdAt_asc', label: t('sorting.createdAt.buttonAsc') },
  { value: 'createdAt_desc', label: t('sorting.createdAt.buttonDsc') },
  { value: 'date_asc', label: t('sorting.date.buttonAsc') },
  { value: 'date_desc', label: t('sorting.date.buttonDsc') },
  { value: 'time_asc', label: t('sorting.time.buttonAsc') },
  { value: 'time_desc', label: t('sorting.time.buttonDsc') },
]

const selectedOption = ref('createdAt_asc')
</script>
