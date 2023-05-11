import type { BroswerPage, StepFn } from '../core/type'
import type { BroswerClient } from '../core/BroswerClient'


export default class BasePagePlugin {
    public client: BroswerClient | undefined
    public page: BroswerPage | undefined
    public steps: StepFn[]

    constructor() {
        this.client = undefined
        this.page = undefined
        this.steps = []
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

    // 使用普通forEach无法进行异步遍历, 需要使用PromiseChain进行链式循环
    async call() {
        let promiseChain = Promise.resolve();
        for (const step of this.steps) {
            promiseChain = promiseChain.then(() => step());
        }
        return promiseChain;
    }
}
