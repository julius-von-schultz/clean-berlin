<template>
  <label v-if="label" :for="tagName" class="label">
    <span>{{ label }}</span>
    <span v-if="optional" class="label__optional">(Optional)</span>
  </label>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PvLabel',
  props: {
    /**
     * The text displayed over the form component on the left
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The optional prop, which defines if the form component is optional
     */
    optional: {
      type: Boolean,
      default: false,
    },
    /**
     * The tag name of the component the label is for
     */
    tagName: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.label {
  @apply text-cb-grey-6;
  @apply text-xs;
  @apply flex;
  @apply justify-between;

  &__optional {
    @apply text-cb-grey-9;
  }
}
</style>
