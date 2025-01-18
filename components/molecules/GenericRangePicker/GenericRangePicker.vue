<template>
  <div class="range-picker">
    <span class="range-picker__label">{{ fromLabel }}</span>
    <InputField
      class="range-picker__input"
      :input-type="inputType"
      :model-value="fromValue"
      :icon="icon"
      :rules="rules"
    />
    <span class="range-picker__label">{{ toLabel }}</span>
    <InputField
      class="range-picker__input"
      :input-type="inputType"
      :model-value="toValue"
      :icon="icon"
      :rules="rules"
    />
  </div>
</template>

<script setup>
defineProps({
  inputType: {
    type: String,
    default: 'time',
  },
  fromLabel: {
    type: String,
    default: undefined,
  },
  fromValue: {
    type: String,
    default: undefined,
  },
  toLabel: {
    type: String,
    default: undefined,
  },
  toValue: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  rules: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style scoped>
.range-picker {
  @apply flex;
  @apply items-center;
  @apply gap-x-4;
  white-space: nowrap;
  @apply text-cb-grey-5;
  justify-content: space-between;

  &__label {
    @apply w-32;
    @apply flex;
    @apply justify-center;
  }
}
</style>
