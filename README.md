# alien-signals-mapish

As if JavaScript `Map()` was abducted by [alien-signals](https://github.com/stackblitz/alien-signals) and had a baby.

## When to use alien-signals-mapish

If you want to replace a small sub-set of [`Map()` methods](https://www.w3schools.com/js/js_map_methods.asp) and add [alien-signals' `effect()`](https://github.com/stackblitz/alien-signals?tab=readme-ov-file#basic-apis) on the Map()'s values.

## Usage

package.json if using with Node/Bun/etc

```json
"dependencies": {
    "alien-signals-mapish": "github:tomByrer/alien-signals-mapish",
    ...
```
Notes:
* the map key has a type of 'any' to emulate what `Map()` allows, but suggested to use only strings, since that is all that been actually tested
* `set()` doesn't return anything, so no chaining
* `effect()` running when initialized is inherited behavior

### Demo

```js
import SignalMapish from 'alien-signals-mapish'

const presets = [['count', 0], ['name', 'Tom']]
const mapish = new SignalMapish(presets)

// effect runs when initialized and only when count changes
mapish.effect(()=>{
  console.info('count is now', mapish.get('count'))
}) // count is now 0

console.log(mapish.has('count') ) // true
console.log(mapish.get('count') ) // 0
console.log(mapish.has('missing') ) // false
console.log(mapish.get('missing') ) // undefined

// fails mapish.set('count', 42).set('newkey', 'fails')
mapish.set('count', 42) // no return
mapish.set('name', 'Thomas') // should not trigger effect
console.log(mapish.get('count')) // count is now 42\n42
```

Also `bun test` in CLI runs the `.test.js` file.

### History

* 0.1.0 init, Developed for my [`state-shifter` Finite State Machine](https://github.com/tomByrer/state-shifter) as a progressive enhancement to JS's `Map()`. 

### License

(c)2025 Tom Byrer
MIT
