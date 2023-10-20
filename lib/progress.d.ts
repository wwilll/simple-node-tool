import progress from 'progress'

export class Progress {
  public _instance: progress
  private _timer: number
  private originConsoleLog: Console["log"]

  constructor(temp: string, options: progress.ProgressBarOptions)

  storeConsole(): void
  checkRecover(): void
  tick(_percent: number, tokens: Record<string, string>): void
  clearLastLine(): void
  terminate(): void
}

export default Progress
