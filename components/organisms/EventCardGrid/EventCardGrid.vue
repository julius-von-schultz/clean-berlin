<template>
  <div class="event-card-grid">
    <EventCard v-for="i in 16" :key="i" :event="i" />
  </div>
</template>

<script setup lang="ts">
import EventCard from '~/components/molecules/EventCard/EventCard.vue'
</script>

<style lang="scss">
.event-card-grid {
  @apply h-full;
  @apply grid grid-cols-4;
  @apply gap-[18px];
  @apply mx-8;
  justify-self: center;
  @apply mx-8;
}
</style>