<template>
  <div class="search-bar">
    <Icon
      class="search-bar__icon"
      icon="search"
      @click="$emit('click:icon', internalValue)"
    />
    <input
      v-bind="{ placeholder, ...$attrs }"
      ref="input"
      v-model="internalValue"
      type="text"
      class="search-bar__input"
      :placeholder="placeholder"
      @keypress.enter="submit()"
      @focus="$emit('focus', true)"
      @input="updateValue"
    />
  </div>
</template>

<script>
import { defineComponent, ref, toRefs, watch } from 'vue'
import { useSanitizer } from '~/composables/sanitizer/useSanitizer.js'
import { useEventsStore } from '~/stores/events/events.js'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'SearchBar',
  props: {
    /**
     * The input value
     * @model
     */
    modelValue: {
      type: String,
      default: undefined,
    },
    /**
     * A text which is displayed if no value given
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * The text displayed over the form component via PvLabel component
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The isRequired prop, which defines if the text field is required or not
     */
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    /**
     * Fired on focus and blur.
     *
     * @event focus
     * @property {boolean} isFocused
     */
    'focus',
    /**
     * Fired on icon clicked.
     *
     * @event click:icon
     * @property {object} $event
     */
    'click:icon',
    /**
     * Fired on enter key.
     *
     * @event submit
     * @property {string} value
     */
    'submit',
    'input',
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const sanitizer = useSanitizer()
    const { modelValue: propsValue } = toRefs(props)
    const internalValue = ref(props.modelValue)

    const eventStore = useEventsStore()
    const { searchTerm } = storeToRefs(eventStore)

    const submit = () => {
      console.log('*** exec', internalValue.value)
      searchTerm.value = internalValue.value
      emit('submit', internalValue)
    }

    const updateValue = () => {
      emit('update:modelValue', sanitizer.clear(internalValue.value))
    }

    watch(propsValue, () => {
      if (sanitizer.clear(internalValue.value)) {
        internalValue.value = propsValue.value
      }
    })

    return {
      // States
      internalValue,

      // Actions
      updateValue,
      submit,
    }
  },
})
</script>

<style lang="scss">
.search-bar {
  @apply relative;
  @apply w-full;

  &__icon {
    @apply absolute;
    @apply top-1/4 left-4;
    @apply cursor-pointer;
    @apply text-cb-grey-8;
  }

  &__input {
    @apply w-full;
    @apply pr-4 pl-[54px] py-3;
    @apply rounded-xl;
    @apply text-cb-grey-11;
    @apply bg-cb-grey-1;

    // fix for mobile safari to show box-shadow
    appearance: none;

    &:focus {
      @apply text-cb-grey-11;

      // safari fix to prevent focus outline
      outline: 0;
    }

    &::placeholder {
      @apply text-cb-grey-8;
    }
  }
}
</style>
