<template>
  <Transition name="modal-grow">
    <div v-if="isOpen" class="sorting-modal">
      <p class="sorting-modal__description">{{ t('sorting.description') }}</p>
      <DateRangePicker />
      <TimeRangePicker />
    </div>
  </Transition>
</template>

<script setup>
const { t } = useI18n()
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.sorting-modal {
  @apply flex flex-col;
  @apply gap-y-7;

  &__description {
    @apply text-sm;
    @apply leading-3;
    @apply text-cb-grey-4;
  }

  &__buttons {
    @screen md {
      @apply flex flex-row;
      @apply gap-x-4;
    }
  }
}

.modal-grow-enter-active {
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
}

.modal-grow-enter-from {
  max-height: 0;
  opacity: 0;
}

.modal-grow-enter-to {
  max-height: 100vh;
  opacity: 1;
}

.modal-grow-leave-from {
  max-height: 100vh;
  opacity: 1;
}

.modal-grow-leave-to {
  max-height: 0;
}
</style>
