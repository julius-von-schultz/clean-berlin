<template>
  <div class="main-navigation">
    <HeaderLink
      v-for="entry in entries"
      :key="entry.index"
      :label="entry.label"
      :icon="entry.icon"
      :link="entry.link"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const entries = computed(() => [
  { index: 0, label: t('header.events'), icon: 'list', link: '/events' },
  {
    index: 1,
    label: t('header.favorites'),
    icon: 'favorite',
    link: '/favorites',
  },
  { index: 2, label: t('header.map'), icon: 'map', link: '/map' },
  { index: 3, label: t('header.calendar'), icon: 'event', link: '/calendar' },
])
</script>

<style lang="scss">
.main-navigation {
  @apply flex;
  @apply gap-x-8;
}
</style>
