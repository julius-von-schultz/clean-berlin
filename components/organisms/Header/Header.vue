<template>
  <div class="header">
    <ContentWrapper class="header__grid">
      <ErrorMessage />
      <SearchBar
        :placeholder="$t('header.searchPlaceholder')"
        class="header__search-bar"
      />
      <LanguageSwitcher class="header__language-switcher" />
      <MainNavigation class="header__main-navigation" />
      <CbButton
        :label="t('header.loginButton')"
        background-color="green"
        class="header__login-button"
      />
    </ContentWrapper>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
</script>

<style lang="scss">
.header {
  @apply h-[180px];
  @apply bg-cb-grey-9;
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
    align-self: flex-end;
    @apply mb-[26px];
    @screen lg {
      @apply row-start-2;
      @apply col-start-1 col-end-7;
    }
  }

  &__login-button {
    align-self: flex-end;
    @apply mb-[26px];

    @screen lg {
      @apply row-start-2;
      @apply col-start-9;
      @apply col-end-11;
    }
  }
}
</style>
