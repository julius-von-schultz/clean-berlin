<template>
  <div class="sorting-bar">
    <CbButton
      :label="$t('sorting.date.buttonAsc')"
      background-color="white"
      border-color="green-darker-smooth"
      text-color="green-darker-smooth"
      :has-shadow="true"
      :icon="dateSortingisOpen ? 'expand_less' : 'expand_more'"
      @click="openOrCloseDateSorting"
    />
    <CbButton
      :label="$t('sorting.time.buttonAsc')"
      background-color="white"
      border-color="green-darker-smooth"
      text-color="green-darker-smooth"
      :has-shadow="true"
      :icon="timeSortingisOpen ? 'expand_less' : 'expand_more'"
      @click="openOrCloseTimeSorting"
    />
    <CbButton
      :label="$t('sorting.createdAt.buttonAsc')"
      background-color="white"
      border-color="green-darker-smooth"
      text-color="green-darker-smooth"
      :has-shadow="true"
      :icon="createdAtSortingisOpen ? 'expand_less' : 'expand_more'"
      @click="openOrCloseCreatedAtSorting"
    />
  </div>
</template>

<script setup>
const dateSortingisOpen = ref(false)
const timeSortingisOpen = ref(false)
const createdAtSortingisOpen = ref(false)

const openOrCloseDateSorting = () => {
  dateSortingisOpen.value = !dateSortingisOpen.value
}

const openOrCloseTimeSorting = () => {
  dateSortingisOpen.value = !dateSortingisOpen.value
}

const openOrCloseCreatedAtSorting = () => {
  dateSortingisOpen.value = !dateSortingisOpen.value
}
</script>
