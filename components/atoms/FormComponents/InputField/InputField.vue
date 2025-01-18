<template>
  <div class="input">
    <PvLabel :optional="!required" :label="label" />
    <div class="input__wrapper">
      <input
        v-bind="{ placeholder, disabled, ...$attrs }"
        ref="input"
        v-model="internalValue"
        :required="required"
        :type="inputType"
        class="input__element"
        :class="{
          'input__element--icon': icon,
          'input__element--error': !!validation.getError(),
          'input__element--text-dark': internalValue,
        }"
        :placeholder="placeholder"
        @keypress.enter="$emit('submit', internalValue)"
        @focus="$emit('focus', true)"
        @blur="$emit('focus', false), validation.validateInput()"
        @input="updateValue"
      />
      <Icon
        v-if="icon || validation.getError()"
        class="input__icon"
        :class="{ 'input__icon--error': !!validation.getError() }"
        :icon="!!validation.getError() ? 'error_outline' : icon"
        @click="$emit('click:icon', internalValue)"
      />
    </div>
    <ErrorMessage
      v-if="!!validation.getError()"
      :error-message="validation.getError()"
    />
  </div>
</template>

<script>
import { defineComponent, ref, toRefs, watch } from 'vue'
import { useInputValidator } from '~/composables/useValidator'
import { useSanitizer } from '~/composables/sanitizer/useSanitizer.js'

export default defineComponent({
  name: 'InputField',
  props: {
    /**
     * The input value
     * @model
     */
    modelValue: {
      type: [String, Number, Date],
      default: undefined,
    },
    /**
     * The input type
     * @model
     */
    inputType: {
      type: String,
      default: 'text',
    },
    /**
     * An optional icon that can be shown
     * @see [Icon List] (https://fonts.google.com/icons?selected=Material+Icons)
     */
    icon: {
      type: String,
      default: null,
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
    /**
     * The disabled prop, which defines if it should be possible to enter text into text field or not
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * defines what should be validated
     */
    rules: {
      type: Object,
      default: () => ({}),
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

    const updateValue = () => {
      emit('update:modelValue', sanitizer.clear(internalValue.value))
    }

    const validation = useInputValidator(props.rules, internalValue)

    watch(propsValue, () => {
      if (sanitizer.clear(internalValue.value)) {
        internalValue.value = propsValue.value
      }
    })

    return {
      // States
      internalValue,

      // Actions
      validation,
      updateValue,
    }
  },
})
</script>

<style lang="scss">
.input {
  @apply relative;
  @apply w-full;

  &__wrapper {
    @apply relative;
  }

  &__icon {
    @apply absolute;
    @apply top-1/2 right-4;
    @apply text-cb-grey-6;
    transform: translateY(-50%);

    &--error {
      @apply text-cb-orange;
    }
  }

  &__element {
    @apply block;
    @apply w-full;
    @apply shadow-border-grey-80;
    @apply px-4;
    @apply py-3;
    @apply rounded-xl;
    @apply cursor-text;

    // fix for mobile safari to show box-shadow
    appearance: none;

    &--text-dark {
      @apply text-cb-grey-10;
    }

    &:focus {
      @apply border-cb-grey-11;
      @apply ring-0;
      @apply text-cb-grey-11;
      @apply shadow-border-grey-16;

      // safari fix to prevent focus outline
      outline: 0;
    }

    &:disabled {
      @apply bg-cb-grey-11;
      @apply cursor-not-allowed;
    }

    &::placeholder {
      @apply text-cb-grey-6;
    }

    &:focus + .input__icon {
      @apply text-cb-grey-11;
    }

    &--icon {
      @apply pr-10;
    }

    &--error {
      @apply rounded-t-md;
      @apply rounded-b-none;

      &::-webkit-contacts-auto-fill-button {
        @apply mr-6;
      }
    }
  }
}

input[type='date']::-webkit-calendar-picker-indicator,
input[type='time']::-webkit-calendar-picker-indicator {
  @apply hidden;
}
</style>
