<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="icon" class="pv-svg" v-html="icon" />
</template>

<script>
import { ref, toRefs, watch, onBeforeMount } from 'vue'
import { useAssetsStore } from '~/stores/assets/index.js'

export default {
  name: 'PvSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const assetsStore = useAssetsStore()
    const { getSvgByName } = assetsStore
    const { name } = toRefs(props)

    const icon = ref(null)

    const getRessource = async () => {
      if (props.name) icon.value = await getSvgByName(props.name)
    }

    onBeforeMount(getRessource)
    watch(name, getRessource)

    return {
      icon,
    }
  },
}
</script>
<style lang="scss">
.pv-svg {
  @apply inline-flex items-center;
}
</style>
