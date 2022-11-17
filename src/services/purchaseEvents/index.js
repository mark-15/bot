import axios from 'axios'
import { GRAPH_URL } from '../../../environment'

async function get (lastBlockHeight = 0, numberofPurchase) {
  try {
    const { data: { data: { coverPurchasedEvents = [] } } } = await axios({
      method: 'post',
      url: GRAPH_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        query: `{
        coverPurchasedEvents (
          orderBy: createdAtBlockNumber
          orderDirection: asc
          first: ${numberofPurchase}
          where: {
            createdAtBlockNumber_gt: ${lastBlockHeight}
          }
        ) {
          id
          onBehalfOf
          amountToCover
          createdAtBlockNumber
          product {
            ipfsData
          }
          cover {
            ipfsData
          }
        }
      }`
      })
    })

    return coverPurchasedEvents
  } catch (error) {
    console.error(error)
  }

  return []
}

export { get }
