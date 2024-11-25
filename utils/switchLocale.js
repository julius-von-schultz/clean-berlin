import { joinURL } from 'ufo'
import { useRouter } from '#app'

// Helper function to switch the locale for the current path
export const switchLocale = (locale) => {
  const { currentRoute: route } = useRouter()
  const path = route.value.fullPath.split('/').slice(2).join('/')
  return joinURL('/', locale, path)
}
