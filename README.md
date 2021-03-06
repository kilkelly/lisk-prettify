# lisk-prettify

Format raw Lisk amounts to be more human-readable. Adds decimal point and commas where necessary.

e.g. 100251338358 becomes 1,002.51338358

## Install
```sh
npm install --save lisk-prettify
```

## Include in scripts

```sh
// require
var liskPrettify = require('lisk-prettify').liskPrettify

// require (ES6 version)
const { liskPrettify } = require('lisk-prettify')

// import
import liskPrettify from 'liskPrettify'
```

## Usage Example
```sh
liskPrettify(100251338358)
// "1,002.51338358"
```

## API

### liskPrettify(rawLskValue, config &lt;optional&gt;)

**Parameters**

*rawLskValue* (number) - The raw LSK amount, usually returned when performing API calls to the Lisk network.

*config* (object) &lt;optional&gt; - Configuration for the returned result. The configurations are:
* commas (boolean) - Choose whether or not to display commas where necessary e.g. 1,000,000.00000000. Default: true
* decimals (boolean) - Choose whether or not to display decimal places. Default: true

#### Examples

Prettify a LSK amount

```sh
liskPrettify(100251338358)
// Result: "1,002.51338358"
// returns a string
```

Prettify a LSK amount without commas

```sh
liskPrettify(100251338358, { commas: false })
// Result: 1002.51338358
// returns a number
```

Prettify a LSK amount without decimal places

```sh
liskPrettify(100251338358, { decimals: false })
// Result: "1,002"
```

## Tests

```sh
/* run this command inside lisk-prettify's
   node_modules folder */

npm run test
```

## Feedback

Pull requests and opened issues are welcome!

## License

MIT

