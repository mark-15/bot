import { TwitterApi } from 'twitter-api-v2'
import * as environment from '../../environment'

const client = new TwitterApi({
  appKey: environment.TWITTER_CONSUMER_API_KEY,
  appSecret: environment.TWITTER_CONSUMER_API_SECRET,
  accessToken: environment.TWITTER_ACCESS_TOKEN,
  accessSecret: environment.TWITTER_ACCESS_SECRET
})

const rwClient = client.readWrite

export { rwClient }
