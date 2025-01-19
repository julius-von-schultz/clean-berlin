import { defineStore } from 'pinia'
import { mockedEvents } from '~/stores/events/partials/mockData'

export const useEventsStore = defineStore('events', () => {
  const currentEvents = ref(mockedEvents)

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]
  }

  const getInitialEndDate = () => {
    const date = new Date()
    date.setUTCFullYear(date.getUTCFullYear() + 2)
    return formatDate(date)
  }

  const searchTerm = ref(null)
  const startDate = ref(formatDate(new Date()))
  const endDate = ref(getInitialEndDate())
  const startTime = ref('00:00')
  const endTime = ref('23:59')

  const filterEventsBySearchTerm = (events) => {
    // Filter events based on the search term in the title or description
    if (!searchTerm.value) return events
    return events.filter(
      (event) =>
        event.title?.toLowerCase().includes(searchTerm.value?.toLowerCase()) ||
        event.description
          ?.toLowerCase()
          .includes(searchTerm.value?.toLowerCase()),
    )
  }

  const filterEventsByDate = (events) => {
    // Filter events that fall within the selected start and end date
    return events.filter(
      (event) =>
        new Date(event.date) >= new Date(startDate.value) &&
        new Date(event.date) <= new Date(endDate.value),
    )
  }

  const filterEventsByTime = (events) => {
    // Filter events that fall within the selected start and end time
    return events.filter((event) => {
      const eventStartTime = event.startTime
      const eventEndTime = event.endTime
      return eventStartTime >= startTime.value && eventEndTime <= endTime.value
    })
  }

  const filteredAndSortedEvents = computed(() => {
    return filterEventsBySearchTerm(currentEvents.value)
  })

  return {
    currentEvents,
    filteredAndSortedEvents,
    searchTerm,
    startDate,
    endDate,
    startTime,
    endTime,

    //actions
    filterEventsByDate,
    filterEventsByTime,
  }
})
