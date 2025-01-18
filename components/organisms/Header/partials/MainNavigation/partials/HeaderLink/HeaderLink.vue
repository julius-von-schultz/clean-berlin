<template>
  <NuxtLink class="header-link" :to="props.link">
    <span class="header-link--label">{{ props.label }}</span>
    <Icon :icon="props.icon" class="header-link--logo" />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  icon: {
    type: String,
    default: '',
    required: true,
  },
  link: {
    type: String,
    default: '/',
  },
})
</script>

<style lang="scss">
.header-link {
  @apply flex;
  @apply w-[142px];
  @apply justify-between items-center;
  @apply text-[20px] font-semibold;

  &:hover {
    @apply cursor-pointer;
    @apply text-cb-green-lighter;
  }
}
</style>
