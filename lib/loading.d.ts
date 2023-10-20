export default class Loading {
  private _instance: import('ora').Ora
  private defaultColor: string

  constructor(options?: import('ora').Options)

  start(text?: string, color?: string): void
  change(text?: string, color?: string): void
  warn(text?: string): void
  succeed(text?: string): void
  fail(text?: string): void
  end(text?: string, color?: string): void
}
