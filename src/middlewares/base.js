import { NODE_ENV } from '../../environment'
import { getUserAgent } from '../utils/user-agent'

export const middleware = (req, res, next) => {
  const userAgentName = req.headers['user-agent']
  const { method, url, ip } = req
  const dns = req.get('host')
  const fullUrl = `https://${dns}${url}`

  if (NODE_ENV !== 'dev' && !req.secure) {
    return res.redirect(fullUrl)
  }

  const userAgent = getUserAgent(userAgentName)
  const { browserName } = userAgent

  console.debug(`[${method}]`, fullUrl, ip || 'Unknown IP', browserName || 'Unknown Browser', userAgentName || 'Unknown UA')

  req.userAgent = userAgent

  req.browser = browserName
  req.dns = dns
  req.fullUrl = fullUrl

  next()
}
