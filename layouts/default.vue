<template>
  <div>
    <Transition name="page">
      <div v-show="true">
        <Header />
        <div>
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts"></script>
