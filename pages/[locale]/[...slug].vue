<template>
  <div class="index-page">
    <ContentWrapper width="narrow" class="index-page__wrapper">
      <Headline headline="Events" class="index-page__headline" />
      <div class="index-page__search-and-sort">
        <SearchBar
          :placeholder="$t('header.searchPlaceholder')"
          class="index-page__search-bar"
        />
        <CbButton
          class="index-page__sort-button"
          background-color="green"
          :icon="modalIsOpen ? 'close' : 'filter_list'"
          has-shadow
          :label="
            modalIsOpen
              ? $t('sorting.filterButtonCancel')
              : $t('sorting.filterButtonStart')
          "
          @click="openOrCloseModal"
        />
      </div>
      <EventOverviewSortingModal
        :is-open="modalIsOpen"
        class="index-page__sorting-modal"
      />
      <SortingButtonBar />
    </ContentWrapper>
    <EventCardGrid class="index-page__card-grid" />
  </div>
</template>

<script lang="ts" setup>
const modalIsOpen = ref(false)
const openOrCloseModal = () => {
  modalIsOpen.value = !modalIsOpen.value
}
</script>

<style lang="scss">
.index-page {
  &__wrapper {
    @apply mb-8;
  }

  &__headline {
    @apply pb-5;
  }

  &__card-grid {
    @apply mt-5;
  }

  &__search-and-sort {
    @apply flex;
    @apply gap-x-4;
    @apply mb-8;
  }

  &__search-bar {
    @apply w-full;
  }

  &__sort-button {
    @apply w-[30%];
  }

  &__sorting-modal {
    @apply my-8;
  }
}
</style>
