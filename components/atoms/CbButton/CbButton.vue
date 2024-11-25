<template>
  <button class="button" :class="'button--secondary'">
    <span>
      {{ props.label }}
    </span>
    <Icon icon="arrow_forward" />
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss">
.button {
  @apply flex;
  align-items: center;
  justify-content: space-between;
  @apply font-bold;
  @apply p-4;
  @apply w-full;
  @apply h-12;
  @apply rounded-lg;

  &--primary {
    // TODO: Implement primary
    @apply bg-cb-white;
    @apply text-cb-grey-12;
  }

  &--secondary {
    border-width: 2px;
    @apply bg-cb-grey-10;
    @apply text-cb-green;
    @apply border-cb-green;
    @apply shadow-button;
  }
}
</style>