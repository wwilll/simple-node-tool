export { default as Loading } from './lib/loading.js'

export { default as Progress } from './lib/progress.js'

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
