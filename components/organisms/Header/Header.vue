<template>
  <div class="header">
    <ContentWrapper class="header__content-wrapper">
      <MainNavigation />
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import ContentWrapper from '~/components/atoms/ContentWrapper/ContentWrapper.vue'
</script>

<style lang="scss">
.header {
  @apply h-[180px];
  @apply bg-cb-grey-10;
  @apply text-cb-white;

  &__content-wrapper {
    @apply flex;
  }
}
</style>
