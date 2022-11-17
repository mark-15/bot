import BigNumber from 'bignumber.js'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
})

export const convertFromUnits = (value, decimals = 18) => {
  return new BigNumber(value.toString()).dividedBy(Math.pow(10, decimals))
}
