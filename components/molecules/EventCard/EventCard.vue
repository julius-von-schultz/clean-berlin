<template>
  <div class="event-card">
    <NuxtImg
      width="290"
      height="180"
      class="event-card__image"
      src="https://hsg-berlin.de/fileadmin/_processed_/a/b/csm_Kehrenbu__rger_2_9f3039378c.png"
    />
    <div class="event-card__text-wrapper">
      <div class="event-card__title">Park aufräumen</div>
      <div class="event-card__further-information-wrapper">
        <div class="event-card__further-information">
          <Icon icon="event" size="small" />
          <span>Friedrichshain-Kreuzberg</span>
        </div>
        <div class="event-card__further-information">
          <Icon icon="group" size="small" />
          <span>28 Teilnehmer</span>
        </div>
      </div>
    </div>
    <div class="event-card__date">
      25.12.2024
    </div>
  </div>
</template>

<style lang="scss">
.event-card {
  @apply bg-cb-grey-10;
  @apply text-cb-white;
  @apply rounded-xl;
  @apply h-[320px];
  @apply w-[290px];

  &__image {
    @apply h-[180px];
    @apply rounded-t-xl;
    object-fit: cover;
  }

  &__text-wrapper {
    @apply h-[140px];
    @apply rounded-b-xl;
    @apply p-5;
    @apply flex flex-col;
  }

  &__title {
    @apply text-lg font-semibold;
    @apply pb-4;
  }

  &__further-information {
    @apply text-xs;
    @apply flex;
    align-items: center;
    @apply gap-x-2;
    @apply pb-2;
  }

  &__date {
    position: relative;
    width: 76px;
    @apply bg-cb-green-darker;
    bottom: 320px;
    left: 160px;
    font-size: 10px;
    justify-content: center;
    @apply flex;
    @apply py-[5px];
    @apply px-[10px];
    @apply rounded-b-sm;
  }
}
</style>
<script setup lang="ts">
</script>