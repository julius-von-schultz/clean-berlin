<template>
  <div ref="target" class="custom-select">
    <!-- Selected Option -->
    <div class="custom-select__selected" @click="toggleDropdown">
      <span v-if="selectedLabel">{{ selectedLabel }}</span>
      <span v-else class="custom-select__placeholder">{{ placeholder }}</span>
      <Icon
        :icon="isOpen ? 'expand_less' : 'expand_more'"
        :class="['arrow', { 'arrow--open': isOpen }]"
      />
    </div>

    <!-- Options Dropdown -->
    <ul v-if="isOpen" class="custom-select__dropdown">
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="[
          'custom-select__option',
          { 'custom-select__option--selected': option.value === modelValue },
        ]"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: null,
  },
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const target = ref(null)

const { options, modelValue } = toRefs(props)

const selectedLabel = computed(() => {
  const selected = options.value.find(
    (option) => option.value === modelValue.value,
  )
  return selected ? selected.label : null
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  isOpen.value = false
  emit('update:modelValue', option.value)
}

onClickOutside(target, () => (isOpen.value = false))
</script>

<style scoped>
.custom-select {
  @apply w-full;
  position: relative;
  display: inline-block;
  @apply text-cb-grey-10;
  @apply shadow-button;

  ul li:first-of-type {
    @apply rounded-t-lg;
  }

  ul li:last-of-type {
    @apply rounded-b-lg;
  }

  &__placeholder {
    @apply text-cb-grey-5;
  }

  &__selected {
    @apply flex;
    @apply justify-between items-center;
    @apply px-4;
    @apply py-3;
    border: 2px solid;
    @apply border-cb-green-darker/75;
    @apply rounded-xl;
    @apply bg-cb-white;
    @apply cursor-pointer;
  }

  &__dropdown {
    @apply absolute;
    @apply w-full;
    top: 100%;
    left: 0;
    @apply border-2;
    @apply border-cb-green-darker/75;
    @apply bg-cb-white;
    @apply rounded-xl;
    @apply mt-2;
    z-index: 10;
  }

  &__option {
    @apply cursor-pointer;
    @apply px-4;
    @apply py-3;
    transition: background-color 0.2s;

    &:hover {
      @apply bg-cb-green;
      @apply text-cb-white;
    }

    &--selected {
      @apply bg-cb-green-darker/20;
    }
  }

  .arrow {
    transition: transform 0.3s;
    @apply text-cb-green-darker;
  }

  .arrow--open {
    transform: rotate(180deg);
  }
}
</style>
