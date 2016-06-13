# on-wake-up

Small module that calls a function when your computer wakes up from sleep.
Useful for resetting retry timeouts and stuff.

```
npm install on-wake-up
```

## Usage

``` js
var awake = require('on-wake-up')

awake(function () {
  console.log('computer (probably) woke from sleep')
})
```

## Credits

@juliangruber came up with the algorithm

## License

MIT
