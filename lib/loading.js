import ora from 'ora'
import chalk from 'chalk'

export default class Loading {
  _instance
  defaultColor = ''
  constructor(options) {
    this._instance = ora(options)
    this.defaultColor = this._instance.color
  }

  start(text = '', color = this.defaultColor) {
    this._instance.color = color
    this._instance.text = chalk[color](text)
    this._instance.start()
  }
  change(text = '', color = this.defaultColor) {
    this._instance.color = color
    this._instance.text = chalk[color](text)
  }

  warn(text = '') {
    this._instance.warn(chalk.yellow(text))
  }

  succeed(text = '') {
    this._instance.succeed(chalk.green(text))
  }

  fail(text = '') {
    this._instance.fail(chalk.red(text))
  }

  end(text = '', color = 'cyan') {
    this._instance.stopAndPersist({
      prefixText: '',
      suffixText: '',
      symbol: chalk[color]('↣'),
      text: chalk[color](text),
    })
  }
}
