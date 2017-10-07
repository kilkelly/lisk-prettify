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