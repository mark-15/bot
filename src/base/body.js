/**
 * Composes a HTTP response body for dispatch
 * @param {*} message Message
 * @param {*} code The application-specific code dispatched along with this message. Not to be confused with HTTP status codes.
 * @param {*} data HTTP response body's data
 */
export const compose = (message, code, data) => {
  const body = {}

  if (message) {
    body.message = message
  }

  if (code) {
    body.code = code
  }

  if (!(data === null || typeof (data) === 'undefined')) {
    body.data = data
  }

  return body
}
