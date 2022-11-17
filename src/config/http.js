export const headers = [
  {
    key: 'Content-Security-Policy',
    values: [
      'upgrade-insecure-requests',
      "require-trusted-types-for 'script'",
      "default-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'none'",
      "form-action 'none'",
      "script-src 'none'",
      "connect-src 'none'",
      "style-src 'none'",
      "prefetch-src 'none'",
      "manifest-src 'none'",
      "object-src 'none'",
      "img-src 'none'",
      "font-src 'none'"
    ]
  },
  {
    key: 'X-DNS-Prefetch-Control',
    values: ['on']
  },
  {
    key: 'X-XSS-Protection',
    values: ['1', 'mode=block']
  },
  {
    key: 'X-Frame-Options',
    values: ['DENY']
  },
  {
    key: 'Referrer-Policy',
    values: ['strict-origin']
  },
  {
    key: 'X-Content-Type-Options',
    values: ['nosniff']
  },
  {
    key: 'Strict-Transport-Security',
    values: ['max-age=31536000', 'includeSubDomains']
  },
  {
    key: 'Expect-CT',
    values: ['enforce, max-age=31536000']
  },
  {
    key: 'Feature-Policy',
    values: [
      "microphone 'none'",
      "camera 'none'",
      "fullscreen 'none'",
      "geolocation 'none'"
    ]
  },
  {
    key: 'Permissions-Policy',
    values: ['fullscreen=(), geolocation=()']
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    values: ['none']
  }
]
