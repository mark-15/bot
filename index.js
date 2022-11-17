import './logger'

import * as cleanup from './cleanup'
import * as db from './database'
import {
  LOG_LEVEL,
  NODE_ENV,
  PORT,
  SANDBOX
} from './environment'
import * as server from './src/server'

export const start = async () => {
  const http = server.build()

  try {
    console.info('Log level', LOG_LEVEL || 'DEBUG')
    console.info(`Server:${NODE_ENV} is booting`)
    console.info('Connecting to the database server')

    await db.open()

    console.info('Initializing the API server')

    if (SANDBOX !== 'true') {
      http.listen(PORT, () => console.info(`Server:${NODE_ENV} running on http://localhost:${PORT}`))
      return http
    }

    console.warn(`Server:${NODE_ENV} is running in a sandbox environment`)
    return http
  } catch (error) {
    console.error(error)
    http.close()
    cleanup.perform(db, { exit: true })
  }
}

process.on('exit', cleanup.perform.bind(null, db, { cleanup: true }))
process.on('SIGINT', cleanup.perform.bind(null, db, { exit: true }))
process.on('SIGUSR1', cleanup.perform.bind(null, db, { exit: true }))
process.on('SIGUSR2', cleanup.perform.bind(null, db, { exit: true }))

if ((NODE_ENV || '').toLowerCase() !== 'test') {
  start()
}
