<template>
  <PvSvg
    v-if="type === 'svg'"
    :name="icon"
    :class="['icon__svg', `icon--${size}`]"
    @click="$emit('click')"
  />
  <span
    v-else
    :class="[
      'icon__material',
      `icon--${size}`,
      outlined ? 'material-icons-outlined' : 'material-icons',
    ]"
    @click="$emit('click')"
  >
    {{ icon }}
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    /**
     * The icon to display
     * @see [Icon List] (https://fonts.google.com/icons?selected=Material+Icons)
     */
    icon: {
      type: String,
      required: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    /**
     * The size of the icon
     * @values small, base, large, xlarge
     */
    size: {
      type: String,
      default: 'base',
      validator: (val) =>
        [
          'xsmall',
          'small',
          'base',
          'large',
          'xlarge',
          'xxlarge',
          'h3',
          'paragraph',
        ].includes(val),
    },
    /**
     * Set the type of icon
     * @values material-icon, svg
     */
    type: {
      type: String,
      default: 'material-icon',
      validator: (val) => ['material-icon', 'svg'].includes(val),
    },
  },
  emits: ['click'],
})
</script>

<style lang="scss">
@import 'material-icons/iconfont/material-icons.css';

.icon {
  &__svg {
    @apply h-10 w-10;

    @screen md {
      @apply h-16 w-16;
    }

    &.icon--small {
      @apply w-6;
      @apply h-6;
    }
  }

  &__material {
    &.icon--xsmall {
      font-size: 1rem;
    }

    &.icon--small {
      font-size: 1.125rem;
    }

    &.icon--base {
      font-size: 1.5rem;
    }

    &.icon--large {
      font-size: 2rem;
    }

    &.icon--xlarge {
      font-size: 4rem;
    }

    &.icon--xxlarge {
      font-size: 6rem;

      @screen lg {
        font-size: 8rem;
      }
    }

    &.icon--h3 {
      font-size: 1.75rem;

      @screen lg {
        font-size: 2.25rem;
      }
    }

    &.icon--paragraph {
      font-size: 1.5rem;
    }
  }
}
</style>
