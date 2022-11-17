import * as response from '../base/response'

export const validate = (input) => {
  return async (req, res, next) => {
    try {
      const result = await input.schema.validateAsync(req.body)

      if (result) {
        req.payload = Object.assign(req.payload || {}, result)
        return next()
      }
    } catch (error) {
      console.error(error)
      const { protocol, url, ip, userAgent } = req
      const dns = req.get('host')
      const fullUrl = `${protocol}://${dns}${url}`

      console.error(`HTTP body pollution attack stopped from ${ip} (${userAgent.name}). \nURL: ${fullUrl}`)
    }

    response.warning.ACCESS_DENIED.send(res)
  }
}
