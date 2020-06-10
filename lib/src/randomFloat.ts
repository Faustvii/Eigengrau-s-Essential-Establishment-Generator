// eslint-disable-next-line @typescript-eslint/no-unused-vars
let randomFloatFn = (...args: unknown[]): number => {
  throw new Error('Function has not been set!')
}

export function setRandomFloat (fn: (...args: unknown[]) => number) {
  randomFloatFn = fn
}

export function randomFloat (max: number): number
export function randomFloat (min: number, max: number): number
export function randomFloat (min: unknown, max?: unknown): unknown {
  return randomFloatFn(min, max)
}
