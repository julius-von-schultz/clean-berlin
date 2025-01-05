<template>
  <h1 class="headline">{{ props.headline }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  headline: {
    type: String,
    default: '',
    required: true,
  },
})
</script>

<style lang="scss">
.headline {
  @apply text-[40px];
  @apply font-bold;
  @apply text-cb-grey-11;
}
</style>
