<template>
  <div>
    <ContentWrapper width="narrow" class="index-page">
      <Headline headline="Events" class="index-page__headline" />
      <div class="index-page__search-and-sort-container">
        <SearchBar
          :placeholder="$t('header.searchPlaceholder')"
          class="index-page__search-bar"
        />
        <CbButton class="index-page__sort-button" label="Sortiere nach..." />
      </div>
    </ContentWrapper>
    <EventCardGrid class="index-page__card-grid" />
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
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

  &__search-and-sort-container {
    @apply flex;
    @apply gap-x-4;
  }

  &__search-bar {
    @apply w-full;
  }

  &__sort-button {
    @apply w-[30%];
  }
}
</style>
