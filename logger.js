import util from 'util'

const nodeEnv = (process.env.NODE_ENV || 'dev')
const production = nodeEnv === 'production'
const sandbox = ['sandbox', 'test'].indexOf(nodeEnv) > -1

if (!sandbox) {
  const levels = {
    DEBUG: [-1, 'DEBUG', '\x1b[2m%s'],
    LOG: [1, 'LOG', '\x1b[30m%s'],
    INFO: [1, 'INFO', '\x1b[34m%s\x1b[0m'],
    WARN: [2, 'WARN', '\x1b[35m%s\x1b[0m'],
    ERROR: [3, 'ERROR', '\x1b[31m%s\x1b[0m']
  }

  const backup = {
    debug: console.debug,
    log: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  }

  const logLevel = process.env.LOG_LEVEL || ''
  const minLevel = (levels[logLevel.toUpperCase()] || [0])[0]

  const _print = (level, delegate, message, ...params) => {
    const [current, name, color] = level
    const log = `[console.${(name || '').toLowerCase()}] ${util.format(message, ...params)}`

    if (minLevel > current) {
      return
    }

    const payload = {
      severity: name,
      message: log
    }

    production ? delegate(JSON.stringify(payload)) : delegate(color, payload.message, '\x1b[0m')
  }

  global.console.debug = (message, ...params) => {
    _print(levels.DEBUG, backup.debug, message, ...params)
  }

  global.console.log = (message, ...params) => {
    _print(levels.LOG, backup.log, message, ...params)
  }

  global.console.info = (message, ...params) => {
    _print(levels.INFO, backup.info, message, ...params)
  }

  global.console.warn = (message, ...params) => {
    _print(levels.WARN, backup.warn, message, ...params)
  }

  global.console.error = (message, ...params) => {
    _print(levels.ERROR, backup.error, message, ...params)
  }
}
