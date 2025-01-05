<template>
  <button
    :class="[
      'button',
      { 'button--primary': props.variant === 'primary' },
    { 'button--secondary': props.variant === 'secondary' },
   {  'button--small': props.isSmall }
   ]">
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
  isSmall: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<style lang="scss">
.button {
  @apply flex;
  align-items: center;
  justify-content: space-between;
  @apply font-semibold;
  @apply p-4;
  @apply w-full;
  @apply h-12;
  @apply rounded-lg;

  &--primary {
    @apply bg-cb-green-darker;
    @apply text-cb-white;
    @apply shadow-button;
  }

  &--secondary {
    border-width: 2px;
    @apply text-cb-green;
    @apply border-cb-green;
    @apply shadow-button;
  }

  &--small {
    @apply h-8;
  }
}
</style>