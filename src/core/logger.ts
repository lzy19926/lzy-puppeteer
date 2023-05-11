import { getCurrentDateTime } from './utils'
import fs from 'fs'
import path from 'path'
import os from 'os'
import type { ConsoleFn, Logger } from './type'


const logFilePath = path.join(__dirname, "../../logFile/logger.txt")

const msgMap: Record<string, string> = {
    assert: "LZY-PUPPETEER-ASSERT",
    debug: "LZY-PUPPETEER-DEBUG",
    dirxml: "LZY-PUPPETEER-DIRXML",
    error: "LZY-PUPPETEER-ERROR",
    group: "LZY-PUPPETEER-GROUP",
    info: "LZY-PUPPETEER-INFO",
    log: "LZY-PUPPETEER-LOG",
    warn: "LZY-PUPPETEER-WARN",
}

function createLogFile() {
    try {
        fs.accessSync(logFilePath);
    } catch (err) {
        fs.writeFileSync(logFilePath, '----------日志文件已成功创建---------\n');
    }
}

function getMsg(type: string, ...args: any[]) {
    return `[${getCurrentDateTime()}][${msgMap[type]}]: `
        + `[${args.join(",")}]`
        + `${os.EOL}`
}

function consoleFnInvoker(type: ConsoleFn, ...args: any[]) {
    try {
        const msg = getMsg(type, args)

        console[type](msg)

        fs.appendFileSync(logFilePath, msg)
    } catch (err) {
        console.error(err)
    }
}

/**自定义logger工厂 写入日志*/
export function writableLoggerFactory(): Logger {
    createLogFile()

    return {
        assert: (condition?: boolean, ...args: any[]) => consoleFnInvoker("assert", condition, ...args),
        debug: (...args: any[]) => consoleFnInvoker("debug", ...args),
        dirxml: (...args: any[]) => consoleFnInvoker("dirxml", ...args),
        error: (...args: any[]) => consoleFnInvoker("error", ...args),
        group: (...args: any[]) => consoleFnInvoker("group", ...args),
        info: (...args: any[]) => consoleFnInvoker("info", ...args),
        log: (...args: any[]) => consoleFnInvoker("log", ...args),
        warn: (...args: any[]) => consoleFnInvoker("warn", ...args),
    }
}

function test() {
    let logger = writableLoggerFactory()

    logger.assert(false, '123', 345)
    logger.debug('123', 345)
    logger.dirxml('123', 345)
    logger.error('123', 345)
    logger.group('123', 345)
    logger.info('123', 345)
    logger.log('123', 345)
    logger.warn('123', 345)
}

