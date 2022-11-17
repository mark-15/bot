import express from 'express'
import http from 'http'

import * as env from '../environment'
import * as common from './middlewares/base'
import * as cors from './middlewares/cors'
import * as headers from './middlewares/headers'
import * as router from './router'

const app = express()
const server = http.createServer(app)

const { NODE_ENV, REQUEST_LIMIT } = env

export const build = () => {
  try {
    app
      .disable('etag')
      .disable('x-powered-by')
      .set('trust proxy', 2)
      .set('env', 'production')
      .use(common.middleware)
      .use(cors.middleware)
      .use(headers.middleware)
      .use(express.json({ limit: REQUEST_LIMIT }))
      .use(express.urlencoded({ extended: true, limit: REQUEST_LIMIT }))
      .use(router.routes)
      .use(function (_, res) {
        res.status(404).send('Resource not found')
      })
    console.info(`Server:${NODE_ENV} successfully built and ready to boot`)

    return server
  } catch (error) {
    console.error('Server server could not be initialized.')
    console.error(error)
    throw error
  }
}
