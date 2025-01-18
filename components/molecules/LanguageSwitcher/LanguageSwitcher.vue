<template>
  <div ref="target" class="language-switcher">
    <div class="language-switcher__button" @click="isActive = !isActive">
      <div class="language-switcher__label">
        {{ $t('header.languageSwitcherLabel') }}
      </div>
      <Icon :size="size" icon="language" />
    </div>
    <div v-if="isActive" class="language-switcher__content">
      <ul class="language-switcher__list">
        <NuxtLink
          v-for="lang in locales"
          :key="lang.code"
          :to="switchLocale(lang.code)"
        >
          <li class="language-switcher__option">{{ lang.name }}</li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { switchLocale } from '~/utils/switchLocale'
import { useLanguageSwitch } from '~/composables/useLanguageSwitch'
import { useI18n } from 'vue-i18n'

defineProps({
  size: {
    type: String,
    default: 'base',
    validator: (val) => ['base', 'large'].includes(val),
  },
})

const { locales } = useI18n()

const target = ref(null)
const isActive = ref(false)

onClickOutside(target, () => (isActive.value = false))

const { onLanguageSwitched } = useLanguageSwitch()
onLanguageSwitched('switcher', () => {
  isActive.value = false
})
</script>

<style lang="scss">
.language-switcher {
  &__button {
    @apply flex flex-row;
    @apply gap-x-3;
    @apply cursor-pointer;
    @apply p-3;
    @apply border-2 rounded-xl;

    @screen lg {
      @apply text-cb-white;
    }

    &:hover {
      @apply text-cb-green-lighter;
    }
  }

  &__content {
    @apply absolute;
    width: 11rem;
    @apply pt-3;

    @screen lg {
      width: 12.75rem;
    }
  }

  &__list {
    @apply overflow-hidden;
    @apply h-full;
    @apply p-0;
    @apply rounded-md;
    @apply bg-cb-white;
    @apply relative;
    @apply border-2;
    @apply border-cb-grey-6;
    right: 4.5rem;

    @screen lg {
      @apply bottom-0;
      right: 4.5rem;
    }
  }

  &__option {
    @apply pl-2.5;
    @apply text-sm;
    @apply leading-5;
    @apply py-3 px-4;
    @apply text-cb-grey-11;

    @screen lg {
      @apply text-base;
    }

    &:hover {
      @apply bg-cb-green;
      @apply text-cb-white;
    }
  }
}
</style>
