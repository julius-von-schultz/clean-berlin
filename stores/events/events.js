import { defineStore } from 'pinia'
import { mockedEventsFull } from '~/stores/events/partials/mockData'

export const useEventsStore = defineStore('events', () => {
  const fetchedEvents = mockedEventsFull

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
  const sortingWith = ref('createdAt_asc')

  const filterEventsBySearchTerm = (events) => {
    // Filter events based on the search term in the title or description
    if (!searchTerm.value) return events
    return events.filter(
      (event) =>
        event.title?.toLowerCase().includes(searchTerm.value?.toLowerCase()) ||
        event.description
          ?.toLowerCase()
          .includes(searchTerm.value?.toLowerCase()) ||
        event.district?.toLowerCase().includes(searchTerm.value?.toLowerCase()),
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

  const sortEvents = (events) => {
    // Sort events based on the sortingWith value
    switch (sortingWith.value) {
      case 'createdAt_asc':
        return events.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        )
      case 'createdAt_desc':
        return events.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        )
      case 'date_asc':
        return events.sort((a, b) => new Date(a.date) - new Date(b.date))
      case 'date_desc':
        return events.sort((a, b) => new Date(b.date) - new Date(a.date))
      case 'time_asc':
        return events.sort((a, b) => a.startTime.localeCompare(b.startTime))
      case 'time_desc':
        return events.sort((a, b) => b.startTime.localeCompare(a.startTime))
      default:
        return events
    }
  }

  const filteredAndSortedEvents = computed(() => {
    let currentEvents = filterEventsBySearchTerm(fetchedEvents)
    currentEvents = filterEventsByDate(currentEvents)
    currentEvents = filterEventsByTime(currentEvents)
    currentEvents = sortEvents(currentEvents)
    return currentEvents
  })

  const findEventById = (id) => {
    return fetchedEvents.find((event) => event.id === Number(id)) || {}
  }

  return {
    filteredAndSortedEvents,
    searchTerm,
    startDate,
    endDate,
    startTime,
    endTime,
    sortingWith,

    // actions
    findEventById,
  }
})
