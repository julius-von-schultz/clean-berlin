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
const entries = [
  { index: 0, label: 'Events', icon: 'list', link: '/events' },
  { index: 1, label: 'Favoriten', icon: 'star', link: '/favorites' },
  { index: 2, label: 'Karte', icon: 'map', link: '/map' },
  { index: 3, label: 'Kalender', icon: 'event', link: '/calender' },
]
</script>

<style lang="scss">
.main-navigation {
  @apply flex;
  @apply gap-x-8;
}
</style>
