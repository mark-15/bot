import bowser from 'bowser'
import { getBrowser } from './browser'

export const getUserAgent = (name) => {
  try {
    if (!name) {
      return {}
    }

    const parsed = bowser.parse(name)
    const browser = getBrowser(parsed)

    return {
      name,
      ...parsed,
      browserName: browser
    }
  } catch {
    // swallow this error
  }

  return {
    name,
    browserName: name
  }
}
