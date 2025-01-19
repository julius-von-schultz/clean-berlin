<template>
  <div class="sorting-bar">
    <CustomSelect
      v-model="sortingWith"
      :options="selectOptions"
      :placeholder="t('sorting.sortSelectPlaceholder')"
    />
  </div>
</template>

<script setup>
import { useEventsStore } from '~/stores/events/events.js'
import { storeToRefs } from 'pinia'

const { t } = useI18n()

const selectOptions = [
  { value: 'createdAt_asc', label: t('sorting.createdAt.buttonAsc') },
  { value: 'createdAt_desc', label: t('sorting.createdAt.buttonDsc') },
  { value: 'date_asc', label: t('sorting.date.buttonAsc') },
  { value: 'date_desc', label: t('sorting.date.buttonDsc') },
  { value: 'time_asc', label: t('sorting.time.buttonAsc') },
  { value: 'time_desc', label: t('sorting.time.buttonDsc') },
]

const eventsStore = useEventsStore()
const { sortingWith } = storeToRefs(eventsStore)
</script>
