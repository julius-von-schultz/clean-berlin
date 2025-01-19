<template>
  <ContentWrapper class="event-detail-page">
    <div class="event-detail-page__top-container">
      <div class="event-detail-page__left-top-container">
        <Headline
          width="narrow"
          :headline="`Event: ${currentEvent.title}`"
          class="event-detail-page__headline"
        />
        <NuxtImg
          class="event-detail-page__image"
          :src="currentEvent.imageUrl"
        />
        <div class="event-detail-page__text-below-image">
          <AddressItem
            class="event-detail-page__date"
            icon="event"
            :text="$d(currentEvent.date, 'date')"
            :reverse-items="true"
          />
          <span>Aktuelle Teilnehmerzahl: {{ currentEvent.participants }}</span>
        </div>
      </div>
      <div class="event-detail-page__right-top-container">
        <CbButton
          class="event-detail-page__button event-detail-page__button--favorites"
          label="Merken"
          icon="favorite"
        />
        <AddressSection
          class="event-detail-page__address-section"
          :current-event="currentEvent"
        />
        <CbButton
          class="event-detail-page__button"
          label="Routenplaner"
          icon="directions"
        />
        <CbButton
          class="event-detail-page__button"
          label="Teilnehmen"
          background-color="white"
          text-color="green"
          border-color="green"
          :has-shadow="true"
          icon="diversity_1"
        />
      </div>
    </div>
    <p class="event-detail-page__description">
      Lorem ipsum dolor sit amet
      <br />
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  </ContentWrapper>
</template>

<script setup>
import { useEventsStore } from '~/stores/events/events.js'
import AddressSection from '~/pages/[locale]/events/partials/AddressSection/AddressSection.vue'
const route = useRoute()

const eventStore = useEventsStore()

const eventId = computed(() => route.params.event || null)

const currentEvent = computed(() => {
  return eventStore.findEventById(eventId.value)
})
</script>

<style scoped>
.event-detail-page {
  &__top-container {
    @apply flex flex-row;
    @apply mb-4;
  }

  &__left-top-container {
    @apply flex flex-col;
    @apply w-[50%];
  }

  &__right-top-container {
    @apply flex flex-col;
    @apply w-[50%];
    @apply items-end;
    @apply gap-y-4;
  }

  &__image {
    @apply w-full;
    @apply mt-8;
    @apply rounded-xl;
  }

  &__text-below-image {
    @apply flex justify-between;
    @apply mt-4;
  }

  &__button {
    @apply max-w-[250px];

    &--favorites {
      @apply mb-8;
    }
  }
}
</style>
