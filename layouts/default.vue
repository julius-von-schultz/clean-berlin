<template>
  <div>
    <Transition name="page">
      <div v-show="true">
        <Header />
        <div class="content">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.content {
  @apply mt-[52px];
}
</style>
