import { Progress } from '../index.js'

const test = async () => {
  const p = new Progress('progress: :abc [:bar] :percent')

  const t = setInterval(() => {
    // console.log('ProgressInstance._instance.curr')
    if (p.tick(10, { abc: 'fff' })) {
      // p.terminate()
      clearInterval(t)
      const pp = new Progress()
      const tt = setInterval(() => {
        // console.log('ProgressInstance._instance.curr')
        if (pp.tick(10, { abc: 'ggg' })) {
          clearInterval(tt)
        }
      }, 500)
    }
  }, 500)
}

export default test
