<template>
  <Transition name="modal-grow">
    <div v-if="isOpen" class="sorting-modal">
      <DateRangePicker />
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.sorting-modal {
  @apply block;
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
