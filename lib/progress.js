import progress from 'progress'
import readline from 'readline'
import chalk from 'chalk'

class Progress {
  _instance
  _timer
  originConsoleLog
  constructor(_temp, _options) {
    _temp = chalk.green(_temp ?? 'progress: [:bar] :percent')
    _options = _options ?? { curr: 0, total: 100, width: 100, complete: '█', incomplete: '░' }
    // const tWidth = process.stdout.columns
    this._instance = new progress(_temp, _options)
  }
  storeConsole() {
    if (this.originConsoleLog) return
    this.originConsoleLog = console.log
    console.log = this._instance.interrupt.bind(this._instance)
  }
  checkRecover() {
    if (this._instance.complete) {
      console.log = this.originConsoleLog
      this.originConsoleLog = null
    }
  }
  tick(_percent, _opts) {
    this.storeConsole()
    this._instance.tick(_percent, _opts)
    this.checkRecover()
    return !!this._instance.complete
  }
  terminate() {
    this._instance.terminate()
  }
  clearLastLine() {
    readline.moveCursor(process.stdout, 0, -1)
    readline.clearLine(process.stdout, 0)
  }
}

export default Progress
