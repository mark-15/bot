import mongoose from 'mongoose'
const { model, Schema } = mongoose

const twitSchema = new Schema(
  {
    lastBlockHeight: {
      type: Number,
      required: true,
      unique: true
    }
  }
)

const TwitModel = model(
  'Twit',
  twitSchema
)

export { twitSchema, TwitModel }
