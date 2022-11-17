import { TwitModel } from '../../models/twit'
import * as purchaseEvents from '../../services/purchaseEvents'
import * as twitter from '../../services/twitter'

const post = async (req, res) => {
  const { lastBlockHeight = 0 } = await TwitModel.findOne() || {}

  const coverPurchasedEvents = await purchaseEvents.get(lastBlockHeight, 50)

  if (coverPurchasedEvents.length === 0) {
    res.status(204).send()
    return
  }

  await twitter.tweet(coverPurchasedEvents, lastBlockHeight)

  res.status(204).send()
}

export { post }
