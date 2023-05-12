import type { BroswerPage, StepFn, BasePluginConfig } from '../core/type'
import type { BroswerClient } from '../core/BroswerClient'


export default class BasePagePlugin {
    public name: string
    public client?: BroswerClient
    public page?: BroswerPage
    private _page?: BroswerPage
    public steps: StepFn[]

    constructor(config: BasePluginConfig) {
        this.name = config.name || "Unnamed Plugin"
        this.client = undefined
        this.page = undefined
        this.steps = []
        this.addListenerToPage()
    }

    // 监听Page设置变化  注入clientPage列表
    addListenerToPage() {
        Object.defineProperty(this, "page", {
            enumerable: true,
            get() {
                return this._page
            },
            set(page) {
                this._page = page
                this.onPageReady(page)
            }
        });
    }

    // page实例化完成后的回调
    onPageReady(page: BroswerPage) {
        console.log("------inject page------");
        this.setViewport()
        this.client?.pages.add(page)
    }

    // 属性未注册捕获 错误处理
    checkProps(): boolean {
        if (!this.client || !this.page) {
            this.client?.logger.warn("props xxx undefined")
            return false
        }
        return true
    }

    // 注入client
    regist(client: BroswerClient) {
        this.client = client
    }

    // 设置屏幕大小
    async setViewport() {
        if (!this.page) return this.client?.logger.warn("No Page");
        const pageSize = this.client?.config.pageSize
        await this.page.setViewport(pageSize);
    }

    // 使用普通forEach无法进行异步遍历, 需要使用PromiseChain进行链式循环
    async call() {
        let promiseChain = Promise.resolve();
        for (const step of this.steps) {
            promiseChain = promiseChain.then(() => step());
        }
        return promiseChain;
    }
}