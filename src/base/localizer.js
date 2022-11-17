import util from 'util'

/**
 * Localizes the invariant member to the current language.
 * @param {*} provider Localization provider
 * @param  {...any} params Invariant parameters
 */
const localize = function (provider, ...params) {
  const { invariant } = this
  return localizeLiteral(provider, invariant, ...params)
}

/**
 * Localizes the supplied literal to the current language.
 * @param {*} provider The localization provider
 * @param {*} literal The literal to localize
 * @param  {...any} params The literal parameters
 */
const localizeLiteral = function (provider, literal, ...params) {
  if (!literal) {
    return ''
  }

  const formatter = typeof provider === 'function' ? provider : util.format

  return (formatter(literal, ...params) || '').trim()
}

export { localize, localizeLiteral }
