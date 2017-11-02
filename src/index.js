'use strict'

import BigNumber from 'bignumber.js'
import numeral from 'numeral'

// ---------------------------------------------------

function formatLskValueWithDecimalPoint (lskValue) {
  return new BigNumber(lskValue || 0).dividedBy(new BigNumber(10).pow(8)).toFixed()
}

// ---------------------------------------------------

const formatLskValueWithCommas = function (lskValue) {
  return numeral(lskValue).format('0,0.[0000000000000]')
}

// ---------------------------------------------------

function liskPrettify_ (
  rawLskValue,
  {
    commas = true, // include commas? e.g. '4,002.51338358'
    decimals = true // include decimal places? e.g. 4002.51338358
  } = {}
) {
  let rawLskValueInProcess = formatLskValueWithDecimalPoint(rawLskValue)

  // Don't show decimal places
  if (!decimals) {
    rawLskValueInProcess = Math.floor(rawLskValueInProcess)
  }

  // Include commas in the value (outputs a string)
  if (commas) {
    return formatLskValueWithCommas(rawLskValueInProcess)
  } else { // No commas in the value
    return parseFloat(rawLskValueInProcess)
  }
}

// ---------------------------------------------------

export default liskPrettify_
export const liskPrettify = liskPrettify_
