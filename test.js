var test = require('tape')
var liskPrettify = require('./dist/index').liskPrettify

test('Prettify amount', function (t) {
  t.plan(1)
  t.equal(liskPrettify(400251338358), '4,002.51338358')
})

test('Prettify amount, no commas', function (t) {
  t.plan(1)
  t.equal(liskPrettify(400251338358, { commas: false }), 4002.51338358)
})

test('Prettify small amount', function (t) {
  t.plan(1)
  t.equal(liskPrettify(123), '0.00000123')
})

test('Prettify small amount, no commas', function (t) {
  t.plan(1)
  t.equal(liskPrettify(123, { commas: false }), 0.00000123)
})

test('Prettify amount, no decimal places', function (t) {
  t.plan(1)
  t.equal(liskPrettify(400251338358, { decimals: false }), '4,002')
})

test('Prettify small amount, no decimal places', function (t) {
  t.plan(1)
  t.equal(liskPrettify(123, { decimals: false }), '0')
})

test('Prettify amount, no commas, no decimal places', function (t) {
  t.plan(1)
  t.equal(liskPrettify(400251338358, { commas: false, decimals: false }), 4002)
})

test('Prettify small amount, no commas, no decimal places', function (t) {
  t.plan(1)
  t.equal(liskPrettify(123, { commas: false, decimals: false }), 0)
})
