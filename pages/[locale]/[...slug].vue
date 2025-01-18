<template>
  <div>
    <ContentWrapper width="narrow" class="index-page">
      <Headline headline="Events" class="index-page__headline" />
      <div class="index-page__search-and-sort">
        <SearchBar
          :placeholder="$t('header.searchPlaceholder')"
          class="index-page__search-bar"
        />
        <CbButton
          class="index-page__sort-button"
          :icon="modalIsOpen ? 'expand_less' : 'expand_more'"
          label="Sortiere nach..."
          @click="openOrCloseModal"
        />
      </div>
      <EventOverviewSortingModal
        :is-open="modalIsOpen"
        class="index-page__sorting-modal"
      />
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
  &__headline {
    @apply pb-5;
  }

  &__card-grid {
    @apply mt-5;
  }

  &__search-and-sort {
    @apply flex;
    @apply gap-x-4;
  }

  &__search-bar {
    @apply w-full;
  }

  &__sort-button {
    @apply w-[30%];
  }

  &__sorting-modal {
    @apply mt-[30px];
  }
}
</style>
