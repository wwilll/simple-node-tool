import { default as loadingTest } from './loading.js'

import { default as progressTest } from './progress.js'

;(async () => {
  console.log('==============loading  test=============')
  await loadingTest()
  console.log('==============progress test=============')
  await progressTest()
})()
