<template>
  <div class="event-card-grid">
    <EventCard
      v-for="(event, index) in filteredAndSortedEvents"
      :key="index"
      :event="event"
    />
  </div>
</template>

<script setup lang="ts">
import EventCard from '~/components/molecules/EventCard/EventCard.vue'
import { useEventsStore } from '~/stores/events/events.js'
import { storeToRefs } from 'pinia'

const eventStore = useEventsStore()
const { filteredAndSortedEvents } = storeToRefs(eventStore)
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
