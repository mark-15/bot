import * as response from '../base/response'

export const validate = (input) => {
  return async (req, res, next) => {
    try {
      const result = await input.schema.validateAsync(req.params)

      if (result) {
        req.payload = Object.assign(req.payload || {}, result)
        return next()
      }
    } catch (error) {
      const { protocol, url, ip, userAgent } = req
      const dns = req.get('host')
      const fullUrl = `${protocol}://${dns}${url}`

      console.error(`HTTP invalid parameter stopped from ${ip} (${userAgent.name}). \nURL: ${fullUrl}`)
      console.error(error)
    }

    response.warning.ACCESS_DENIED.send(res)
  }
}
