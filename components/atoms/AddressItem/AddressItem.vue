<template>
  <div class="address-item" :class="{ 'address-item--reverse': reverseItems }">
    <span>{{ text }}</span>
    <Icon :icon="icon" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: undefined,
    required: true,
  },
  icon: {
    type: String,
    default: undefined,
    required: true,
  },
  reverseItems: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.address-item {
  @apply flex;
  @apply gap-x-3;
  @apply text-cb-grey-12;

  &--reverse {
    flex-direction: row-reverse;
  }
}
</style>
