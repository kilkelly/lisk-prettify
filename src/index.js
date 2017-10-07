'use strict'

import BigNumber from 'bignumber.js'
import numeral from 'numeral'

function formatLskValueWithDecimalPoint (lskValue) {
  return new BigNumber(lskValue || 0).dividedBy(new BigNumber(10).pow(8)).toFixed()
}

const formatLskValueWithCommas = function (lskValue) {
  return numeral(lskValue).format('0,0.[0000000000000]')
}

function liskPrettify_ (rawLskValue, { commas = true } = {}) {
  if (commas) {
    return formatLskValueWithCommas(formatLskValueWithDecimalPoint(rawLskValue))
  } else {
    return parseFloat(formatLskValueWithDecimalPoint(rawLskValue))
  }
}

export default liskPrettify_
export const liskPrettify = liskPrettify_
