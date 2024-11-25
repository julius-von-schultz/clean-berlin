<template>
  <div class="main-navigation">
    <HeaderLink
      v-for="entry in entries"
      :key="entry.index"
      :label="entry.label"
      :icon="entry.icon"
    />
  </div>
</template>

<script setup lang="ts">
const entries = [
  { index: 0, label: 'Events', icon: 'list' },
  { index: 1, label: 'Favoriten', icon: 'star' },
  { index: 1, label: 'Karte', icon: 'map' },
  { index: 1, label: 'Kalender', icon: 'event' },
]
</script>

<style lang="scss">
.main-navigation {
  @apply flex;
  @apply gap-x-8;
  align-self: flex-end;
  @apply pb-[26px];
}
</style>
