import { version } from 'rrweb2/package.json'

// Same as loader-globals.ts except includes rrweb scripts.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import rrwebRecord from 'rrweb/es/rrweb/packages/rrweb/src/record'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getRecordConsolePlugin } from 'rrweb/es/rrweb/packages/rrweb/src/plugins/console/record'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const win: Window & typeof globalThis = typeof window !== 'undefined' ? window : ({} as typeof window)

;(win as any).rrweb = { record: rrwebRecord, version }
;(win as any).rrwebConsoleRecord = { getRecordConsolePlugin }

export default rrwebRecord