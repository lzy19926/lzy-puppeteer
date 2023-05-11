import type { Browser, Page } from 'puppeteer-core'

export type BroswerPage = Page

export type PupBroswer = Browser

export type StepFn = () => Promise<void>

export type LoginConfig = {
    url: string
    username: string
    password: string
}

export interface Logger {
    assert(condition?: boolean, ...data: any[]): void;
    debug(...data: any[]): void;
    dirxml(...data: any[]): void;
    error(...data: any[]): void;
    group(...data: any[]): void;
    info(...data: any[]): void;
    log(...data: any[]): void;
    warn(...data: any[]): void;
}

export type ConsoleFn =
    "log"
    | "assert"
    | "debug"
    | "dirxml"
    | "error"
    | "group"
    | "info"
    | "log"
    | "warn"