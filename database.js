import mongoose from 'mongoose'
import { MONGODB_CONNECTION_STRING } from './environment'

/**
 * Connects to the MongoDB Server
 * @return {Promise<Boolean>} Returns true if the connection succeeded
 */
const open = async () => {
  try {
    if (!MONGODB_CONNECTION_STRING) {
      return false
    }

    mongoose.connection.setMaxListeners(0)

    await mongoose.connect(MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    return true
  } catch (error) {
    console.error(error)
  }

  return false
}

const close = () => {
  try {
    if (mongoose.connection) {
      mongoose.connection.close()
      return true
    }
  } catch (error) {
    console.error(error)
  }

  return false
}

mongoose.connection.on('connected', function () {
  console.info('Database connected')
})

mongoose.connection.on('error', function (error) {
  console.error('Mongoose error', error)
})

export { open, close }
