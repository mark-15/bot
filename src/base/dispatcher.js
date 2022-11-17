import { compose } from './body'
import { localizeLiteral } from './localizer'

/**
 * Dispatches localized HTTP response along with some extra metadata
 * @param {*} param0 Literal object definition
 */
const dispatch = ({ invariant, code, statusCode }) => {
  return (res, data, error, ...params) => {
    if (error) {
      console.error('An error occurred. Code:', code, 'Status Code:', statusCode)
      console.error(error)
    }

    // Localize this message to the current language
    const formatter = res.__
    const message = localizeLiteral(formatter, invariant, ...params)

    const body = compose(message, code, data)
    res.status(statusCode).send(body)
  }
}

/**
 * Sends localized HTTP response dispatch along with some extra metadata
 * @param {import('express').Response} res The response object
 * @param {Object} data The response body message
 * @param {Error?} error Error message text
 * @param  {...any} params The translation literal parameter items
 */
const send = function (res, data = null, error = null, ...params) {
  dispatch(this)(res, data, error, ...params)
}

export { dispatch, send }
