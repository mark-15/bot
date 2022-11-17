export const getBrowser = (ua) => {
  if (!ua) {
    return 'Unknown'
  }

  try {
    const candidates = []

    const { browser, os } = ua

    if (browser) {
      const { name, version } = browser
      name && candidates.push(name)
      version && candidates.push(version)
    }

    if (os) {
      if (candidates.length) {
        candidates.push('on')
      }

      const { name, version } = os
      name && candidates.push(name)
      version && candidates.push(version)
    }

    if (candidates.length) {
      return candidates.join(' ')
    }
  } catch {
    // Swallow this error
  }

  return 'Unknown'
}
