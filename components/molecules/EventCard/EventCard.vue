<template>
  <div class="event-card">
    <NuxtImg width="290" height="156" class="event-card__image" src="https://hsg-berlin.de/fileadmin/_processed_/a/b/csm_Kehrenbu__rger_2_9f3039378c.png" />
    <div class="event-card__text">Card</div>
  </div>
</template>

<style lang="scss">
.event-card {
  @apply bg-cb-grey-1;
  @apply text-cb-grey-1;
  @apply rounded-xl;
  @apply h-[256px];

  &__image {
    width: 100%;
    height: 156px;
    object-fit: cover;
    @apply rounded-t-xl;
  }
}
</style>