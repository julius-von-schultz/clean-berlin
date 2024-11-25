<template>
  <div class="content-wrapper" :class="`content-wrapper--${props.width}`">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: 'wide',
    validator: (val) => ['full', 'wide', 'narrow'].includes(val),
  },
})
</script>

<style lang="scss">
.content-wrapper {
  @apply h-full;

  &--wide {
    @screen lg {
      @apply w-[1064px];
    }
  }
}
</style>
