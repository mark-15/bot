import util from 'util'
import { build } from '../services/rate-limiter'
import * as response from '../base/response'

export const handle = async (req, res, next) => {
  try {
    const { ip } = req

    const handler = build()
    await handler.consume(ip)
    next()
  } catch (error) {
    console.debug(util.format('Rate limit exceeded from IP: %s UA: %s', req.header('x-forwarded-for') || req.ip, req.userAgent.name))
    response.error.REQUEST_LIMIT_EXCEEDED.send(res, null, error)
  }
}
