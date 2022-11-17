function template (strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {}
    const result = [strings[0]]
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key]
      result.push(value, strings[i + 1])
    })
    return result.join('')
  }
}

const greetingsTemplate = ['Great job!', 'That’s cool']

const messagesTemplate = [
  template`${'greeting'}, ${'address'} just purchased ${'amount'} worth of ${'productOrCoverKey'} #cover. ${'link'}`
]

export { greetingsTemplate, messagesTemplate }
