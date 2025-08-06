import type { APIConsole } from '../types/api-explorer.types'

type SetOutputFunction = React.Dispatch<React.SetStateAction<string>>

export const createAPIConsole = (setOutput: SetOutputFunction): APIConsole => ({
  log: (...args: any[]) =>
    setOutput(
      (prev: string) =>
        prev + args.map((arg) => formatConsoleArg(arg)).join(' ') + '\n',
    ),
  error: (...args: any[]) =>
    setOutput(
      (prev: string) =>
        prev +
        '[Error] ' +
        args.map((arg) => formatConsoleArg(arg)).join(' ') +
        '\n',
    ),
  warn: (...args: any[]) =>
    setOutput(
      (prev: string) =>
        prev +
        '[Warn] ' +
        args.map((arg) => formatConsoleArg(arg)).join(' ') +
        '\n',
    ),
  info: (...args: any[]) =>
    setOutput(
      (prev: string) =>
        prev +
        '[Info] ' +
        args.map((arg) => formatConsoleArg(arg)).join(' ') +
        '\n',
    ),
})

const formatConsoleArg = (arg: any): string => {
  if (arg instanceof Error) {
    return `${arg.name}: ${arg.message}\n${arg.stack}`
  }
  if (typeof arg === 'object' && arg !== null) {
    return JSON.stringify(arg, null, 2)
  }
  return String(arg)
}
