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

[@juliangruber](https://github.com/juliangruber) came up with the algorithm

[@pfraze](https://github.com/pfraze) for writing [almost the same module 6 months before me](https://github.com/pfraze/on-wakeup)

## License

MIT
