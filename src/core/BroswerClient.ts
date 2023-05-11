import puppeteer from 'puppeteer-core'
import type { PupBroswer, Logger } from './type'
import BasePagePlugin from '../plugins/BasePagePlugin'
import { writableLoggerFactory } from './logger'


export class BroswerClient {
    public config: any
    public pages: any[]
    public plugins: BasePagePlugin[]
    public logger: Logger
    private _instance: PupBroswer | undefined

    constructor(config: any) {
        this.config = config
        this._instance = undefined
        this.pages = []
        this.plugins = []
        this.logger = writableLoggerFactory()
    }

    // 创建broswer实例
    private async createBrowser() {
        return this._instance = await puppeteer.launch(this.config.default);
    }

    // 添加插件到插件列表
    addPlugin(plugin: BasePagePlugin) {
        this.plugins.push(plugin)
    }

    // 执行插件列表
    async run() {
        await this.createBrowser()

        this.plugins.forEach(plugin => {
            plugin.regist(this);
            plugin.call()
        })
    }

    // 获取broswer实例对象
    async getInstance() {
        return this._instance
            ? this._instance
            : await this.createBrowser()
    }

}