<template>
  <button
    :class="[
      'button',
      backgroundColorClass,
      textColorClass,
      borderColorClass,
      { 'button--border': borderColorClass },
      { 'button--shadow': props.hasShadow },
      { 'button--small': props.isSmall },
    ]"
  >
    <span>
      {{ props.label }}
    </span>
    <Icon :icon="icon" />
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
  icon: {
    type: String,
    default: 'arrow_forward',
  },
  backgroundColor: {
    type: String,
    default: 'green',
    validator: (val) => ['green', 'white'].includes(val),
  },
  borderColor: {
    type: String,
    default: 'none',
    validator: (val) =>
      ['none', 'green', 'green-darker', 'green-darker-smooth'].includes(val),
  },
  textColor: {
    type: String,
    default: 'white',
    validator: (val) =>
      ['white', 'green', 'green-darker', 'green-darker-smooth'].includes(val),
  },
  hasShadow: {
    type: Boolean,
    default: false,
  },
})

const { backgroundColor, textColor, borderColor } = toRefs(props)

const backgroundColorClass = computed(() => {
  switch (backgroundColor.value) {
    case 'white':
      return 'button--background-white'
    default:
      return 'button--background-green'
  }
})

const textColorClass = computed(() => {
  switch (textColor.value) {
    case 'green':
      return 'button--text-green'
    case 'green-darker':
      return 'button--text-green-darker'
    case 'green-darker-smooth':
      return 'button--text-green-darker-smooth'
    default:
      return 'button--text-white'
  }
})

const borderColorClass = computed(() => {
  switch (borderColor.value) {
    case 'green':
      return 'button--border-green'
    case 'green-darker':
      return 'button--border-green-darker'
    case 'green-darker-smooth':
      return 'button--border-green-darker-smooth'
    default:
      return undefined
  }
})
</script>

<style lang="scss">
.button {
  @apply flex;
  @apply items-center justify-between;
  @apply w-full;
  @apply font-semibold;
  @apply p-4 h-12;
  @apply rounded-xl;

  &--shadow {
    @apply shadow-button;
  }

  &--background-green {
    @apply bg-cb-green-darker;
  }

  &--background-white {
    @apply bg-cb-white;
  }

  &--border {
    border-width: 2px;
  }

  &--border-green {
    @apply border-cb-green;
  }

  &--border-green-darker {
    @apply border-cb-green-darker;
  }

  &--border-green-darker-smooth {
    @apply border-cb-green-darker/50;
  }

  &--text-white {
    @apply text-cb-white;
  }

  &--text-green {
    @apply text-cb-green;
  }

  &--text-green-darker {
    @apply text-cb-green-darker;
  }

  &--text-green-darker-smooth {
    @apply text-cb-green-darker/75;
  }

  &--small {
    @apply h-8;
  }
}
</style>
