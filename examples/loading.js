import { sleep, Loading } from '../index.js'

const test = async () => {
  const loading = new Loading('Loading...')
  loading.start('start text', 'red')

  await sleep(500)

  loading.change('change', 'blue')

  await sleep(500)

  loading.succeed('success text')

  loading.warn('warn text')

  loading.fail('fail text')

  loading.end('change text')
}

export default test