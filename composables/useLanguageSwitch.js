import { useI18n } from 'vue-i18n'

const listeners = {}

export const useLanguageSwitch = () => {
  const i18n = useI18n()

  const onLanguageSwitched = (name, listener) => {
    listeners[name] = listener
  }

  i18n.onLanguageSwitched = async () => {
    for (const [name, listener] of Object.entries(listeners)) {
      console.log('Execute listener for language switch: ', name)
      await listener.apply()
    }
  }

  return { onLanguageSwitched }
}
