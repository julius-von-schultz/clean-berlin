<template>
  <div class="address-section">
    <AddressItem
      icon="place"
      :text="`${currentEvent?.street} ${currentEvent.houseNumber}`"
    />
    <AddressItem icon="place" :text="`${currentEvent.postalCode} Berlin`" />
    <AddressItem
      icon="schedule"
      :text="`${currentEvent.startTime} - ${currentEvent.endTime}`"
    />
    <AddressItem icon="mail" :text="currentEvent?.email" />
    <AddressItem icon="call" :text="currentEvent?.phone" />
    <div class="address-section__social-media">
      <Icon class="address-section__social-media--facebook" icon="facebook" />
      <Icon icon="open_in_new" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  currentEvent: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss" scoped>
.address-section {
  @apply flex flex-col;
  @apply gap-y-4;
  @apply items-end;

  &__social-media {
    @apply flex flex-row;
    @apply gap-x-4;
    @apply cursor-pointer;

    &--facebook {
      @apply text-[#0081FB];
    }
  }
}
</style>
