// Tests using Bun
import { test, expect } from 'bun:test'
import SignalMapish from './index'

const map = new SignalMapish([['count', 0], ['name', 'Alice']])

test('SignalMapish initial state', ()=>{
  expect(map.has('count')).toBe(true)
  expect(map.get('count')).toBe(0)
  expect(map.has('missing')).toBe(false)
  expect(map.get('missing')).toBeUndefined()
})

test('SignalMapish get/set', ()=>{
  map.set('count', 42)
  expect(map.get('count')).toBe(42)
})

//TODO improve test
test('SignalMapish effect', ()=>{
  let effectTriggered = false
  map.effect(() => { effectTriggered = true })
  // Note: Actual effect testing would depend on alien-signals-getset implementation
  expect(effectTriggered).toBe(true)
})
