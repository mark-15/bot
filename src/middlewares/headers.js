import { headers } from '../config/http'

export const middleware = (_, res, next) => {
  for (const header of headers) {
    const { key, values } = header
    const value = values.join('; ')

    res.set(key, value)
  }

  next()
}
