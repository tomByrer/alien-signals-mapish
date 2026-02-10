import SignalMapish from './index'

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
mapish.set('count', 42) // no return, but effect should print: count is now 42
mapish.set('name', 'Thomas') // should not trigger effect
console.log(mapish.get('count')) //42
