<template>
    <ContentWrapper width="narrow" class="index-page">
      <Headline headline="Events" class="index-page__headline"/>
      <SearchBar placeholder="Suche Event, Bezirk, Begriff, Zeit, ..." class="index-page__search" />
    </ContentWrapper>
</template>

<style lang="scss">
.index-page {
  &__headline {
    @apply pb-5;
  }
}
</style>
