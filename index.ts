// (c)2026 Tom Byrer
import { effect as ASeffect, signal } from 'alien-signals-getset'

type Signal<T> = { get(): T; set(value: T): void }
type StoreKey = any //FIXME Matches JS Map key flexibility (any value)
type StoreValue<T = unknown> = Signal<T>

export default class SignalMapish<T = unknown> {
  private store: Record<StoreKey, StoreValue<T>> = {}

  constructor(presets: [StoreKey, T][]) {
    const len = presets.length
    for (let i = 0; i < len; i++) {
      const [key, value] = presets[i]
      this.store[key] = signal(value)
    }
  }

  effect(fn: () => void): void { ASeffect(fn) }

  has(key: StoreKey): boolean {
    return key in this.store
  }

  get(key: StoreKey): T | undefined {
    return this.has(key) ? this.store[key].get() : undefined
  }

  set(key: StoreKey, value: T): void {
    const storedSignal = this.store[key]
    if (storedSignal && typeof storedSignal.set === 'function') {
      storedSignal.set(value)
    }
  }
}
