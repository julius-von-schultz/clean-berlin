// all available locales that can be enabled
export const availableLocales = [
  {
    code: 'en',
    language: 'en-US',
    name: 'English',
    file: 'en.json',
  },
  {
    code: 'de',
    language: 'de-DE',
    name: 'Deutsch',
    file: 'de.json',
  },
]

/*
  DateTimeFormat

  Vue-i18n Doc: https://kazupon.github.io/vue-i18n/guide/datetime.html
  DateTimeFormat Doc: http://www.ecma-international.org/ecma-402/2.0/#sec-intl-datetimeformat-constructor
 */
export const dateTimeFormats = {
  de: {
    date: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
    dateLong: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
    },
    timeLong: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
    dateTime: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    },
    dateTimeLong: {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
    dateTimeTimezone: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    },
    'full-timezone': {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    },
  },
  en: {
    date: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
    dateLong: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    },
    timeLong: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
    dateTime: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    },
    dateTimeLong: {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    },
    dateTimeTimezone: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    },
    'full-timezone': {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    },
  },
}

export default {
  legacy: false,
  fallbackLocale: 'en',
  datetimeFormats: dateTimeFormats,
}
