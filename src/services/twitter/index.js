import Promise from 'bluebird'

import { generateTweet } from '../../utils/generate-tweet'
import { truncateAddress } from '../../utils/address'
import { convertFromUnits } from '../../utils/bn'
import { LIQUIDITY_TOKEN_DECIMALS } from '../../config/constant'
import { rwClient } from '../../utils/twitter'
import { TwitModel } from '../../models/twit'

import * as environment from '../../../environment'

async function tweet (purchaseEvents = [], lastBlockHeight) {
  let postTweet = true
  let blockHeight = lastBlockHeight

  await Promise.mapSeries(purchaseEvents, async (purchase) => {
    if (postTweet) {
      try {
        const ipfsData = purchase?.product?.ipfsData || purchase?.cover?.ipfsData
        const parsedIpfs = JSON.parse(ipfsData)
        const productCoverKey = parsedIpfs?.productName || parsedIpfs?.coverName

        const tweet = generateTweet(
          {
            address: truncateAddress(purchase.onBehalfOf),
            amount: convertFromUnits(purchase.amountToCover, LIQUIDITY_TOKEN_DECIMALS),
            productOrCoverKey: productCoverKey,
            link: `${environment.RECEIPT_URL}/${purchase.id}`
          }
        )

        console.log(`Tweeting block number ${purchase.createdAtBlockNumber}`)

        await rwClient.v2.tweet(tweet)
        blockHeight = purchase.createdAtBlockNumber
      } catch (error) {
        console.error(error)
        postTweet = false
      }
    }
  }, { concurrency: 1 })

  await TwitModel.findOneAndUpdate(
    { lastBlockHeight },
    { lastBlockHeight: blockHeight },
    { new: true, upsert: true }
  )
}

export { tweet }
