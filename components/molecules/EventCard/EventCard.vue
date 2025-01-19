<template>
  <div class="event-card">
    <NuxtImg
      width="290"
      height="180"
      class="event-card__image"
      :src="event.imageUrl"
    />
    <p class="event-card__short-description">
      {{ event.description }}
    </p>
    <div class="event-card__text-wrapper">
      <div class="event-card__title">{{ event.title }}</div>
      <div class="event-card__further-information-wrapper">
        <div class="event-card__location">
          <Icon icon="event" size="small" />
          <span>{{ event.district }}</span>
        </div>
        <div class="event-card__participants-and-button">
          <div class="event-card__participants">
            <Icon icon="group" size="small" />
            <span>{{ event.participants }} Teilnehmer</span>
          </div>
          <button
            class="event-card__button"
            @click="navigateTo(`/events/${event.id}`)"
          >
            <span>Mehr Infos</span>
            <Icon size="small" icon="arrow_forward" />
          </button>
        </div>
      </div>
    </div>
    <div class="event-card__date">{{ $d(event.date, 'date') }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  event: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss">
.event-card {
  @apply bg-cb-grey-9;
  @apply text-cb-white;
  @apply rounded-xl;
  @apply h-[320px];
  @apply w-[290px];
  position: relative;
  box-shadow: 0 40px 40px -40px #ccc;

  &__image {
    @apply h-[180px];
    @apply rounded-t-xl;
    object-fit: cover;
  }

  &__short-description {
    position: absolute;
    top: 38.2%;
    @apply px-6;
    @apply text-cb-grey-10;
    @apply font-semibold;
    @apply max-h-[60px];
    @apply text-xs;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    background-color: #d6d6d699;
    border-top: #d9d9d900 14px solid;
    border-bottom: #d9d9d900 12px solid;
    mask-image: linear-gradient(to bottom, transparent 0%, #d9d9d9 10%);
  }

  &__text-wrapper {
    @apply h-[140px];
    @apply rounded-b-xl;
    @apply p-5;
    @apply flex flex-col;
  }

  &__title {
    @apply text-xl font-semibold;
    @apply pb-4;
  }

  &__further-information-wrapper {
    @apply text-xs;
  }

  &__location {
    @apply flex;
    align-items: center;
    @apply gap-x-2;
    @apply pb-2;
  }

  &__participants-and-button {
    @apply flex;
    @apply justify-between;
  }

  &__participants {
    @apply flex;
    align-items: center;
    @apply gap-x-2;
  }

  &__button {
    @apply flex;
    @apply items-center;
    @apply gap-x-2;
    @apply rounded-xl;
    @apply p-2;
    @apply border-2 border-cb-white;
  }

  &__date {
    position: relative;
    width: 76px;
    @apply bg-cb-green-darker;
    bottom: 320px;
    left: 182px;
    font-size: 10px;
    justify-content: center;
    @apply flex;
    @apply py-[5px];
    @apply px-[10px];
    @apply rounded-b-sm;
  }
}
</style>
