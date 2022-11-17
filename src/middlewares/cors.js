import * as env from '../../environment'

const getAllowed = (req, e) => {
  const { WHITELISTED_CORS_DOMAINS, FALLBACK_CORS_ORIGIN } = e
  const whitelistedDomains = WHITELISTED_CORS_DOMAINS ? WHITELISTED_CORS_DOMAINS.split(',').map(x => x.trim()) : []

  if (req.headers.origin) {
    const origin = new URL(req.headers.origin) || {}
    const { hostname } = origin

    for (const domain of whitelistedDomains) {
      if (hostname.endsWith(domain)) {
        return origin.origin
      }
    }
  }

  return FALLBACK_CORS_ORIGIN
}

export const middleware = (req, res, next) => {
  const allowed = getAllowed(req, env)

  res.setHeader('Access-Control-Allow-Origin', allowed)
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST')
  res.setHeader('Access-Control-Allow-Credentials', false)
  res.setHeader('Access-Control-Max-Age', 600)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  next()
}
