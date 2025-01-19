<template>
  <div class="range-picker">
    <span class="range-picker__label">{{ fromLabel }}</span>
    <InputField
      v-model="internalFromValue"
      class="range-picker__input"
      :input-type="inputType"
      :icon="icon"
      :rules="rules"
    />
    <span class="range-picker__label">{{ toLabel }}</span>
    <InputField
      v-model="internalToValue"
      class="range-picker__input"
      :input-type="inputType"
      :icon="icon"
      :rules="rules"
    />
  </div>
</template>

<script setup>
const props = defineProps({
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

const emit = defineEmits(['update:fromValue', 'update:toValue'])

const internalFromValue = ref(props.fromValue)
const internalToValue = ref(props.toValue)

watch(internalFromValue, () => {
  emit('update:fromValue', internalFromValue.value)
})

watch(internalToValue, () => {
  emit('update:toValue', internalToValue.value)
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
