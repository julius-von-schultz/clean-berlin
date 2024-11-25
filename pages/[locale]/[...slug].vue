<template>
  <div>
    <ContentWrapper width="narrow" class="index-page">
      <Headline headline="Events" class="index-page__headline" />
      <SearchBar :placeholder="$t('header.searchPlaceholder')" class="index-page__search-bar" />
    </ContentWrapper>
    <EventCardGrid class="index-page__card-grid" />
  </div>

</template>

<script lang="ts">
export default {
  setup() {
    const { t } = useI18n()

    return {
      t
    }
  }
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
}
</style>
