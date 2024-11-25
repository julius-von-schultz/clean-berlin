<template>
  <div class="header">
    <ContentWrapper class="header__grid">
      <SearchBar placeholder="Suche nach Datum, Ort oder Schlagwort …" class="header__search-bar"/>
      <LanguageSwitcher class="header__language-switcher"/>
      <MainNavigation class="header__main-navigation"/>
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import ContentWrapper from '~/components/atoms/ContentWrapper/ContentWrapper.vue'
import LanguageSwitcher from '~/components/molecules/LanguageSwitcher/LanguageSwitcher.vue'
</script>

<style lang="scss">
.header {
  @apply h-[180px];
  @apply bg-cb-grey-10;
  @apply text-cb-white;

  &__grid {
    justify-self: center;

    @screen lg {
      @apply grid grid-cols-10 grid-rows-2;
    }
  }

  &__search-bar {
    @screen lg {
      @apply row-start-1;
      @apply col-start-4 col-end-9;
      align-self: center;
    }
  }

  &__language-switcher {
    @screen lg {
      @apply row-span-1;
      @apply col-start-9 col-end-11 col-span-2;
      justify-self: end;
      align-self: center;
    }
  }

  &__main-navigation {
    @screen lg {
      @apply row-start-2;
      @apply col-start-1 col-end-7;
    }
  }
}
</style>
