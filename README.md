# lisk-prettify

Format raw Lisk amount to be more human-readable i.e. prettify. Adds decimal point and commas where necessary.

e.g. 400251338358 becomes 4,002.51338358

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
liskPrettify(400251338358)
// "4,002.51338358"
```

## API

### liskPrettify(rawLskValue, config &lt;optional&gt;)

**Parameters**

*rawLskValue* (number) - The raw LSK amount, usually returned when performing API calls to the Lisk network.

*config* (object) &lt;optional&gt; - Configuration for the returned result. The configurations are:
* commas (boolean) - Choose whether or not to display commas where necessary in your result. Default: true

#### Examples

Prettify a LSK amount

```sh
liskPrettify(400251338358)
// Result: "4,002.51338358"
// returns a string
```

Prettify a LSK amount without commas

```sh
liskPrettify(400251338358, { commas: false })
// Result: 4002.51338358
// returns a number
```

## Tests

```sh
// run this command inside lisk-prettify's node_modules folder
npm run test
```

## Feedback

Pull requests and opened issues are welcome!

## License

MIT

