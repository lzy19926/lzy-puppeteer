import BasePagePlugin from './BasePagePlugin'
import type { LoginConfig } from '../core/type'


/**
 * Zoomeye页面操作插件
*/
export class ZoomEyePlugin extends BasePagePlugin {

    private _config: LoginConfig

    constructor(config: LoginConfig) {
        super()
        this._config = config
        this.steps = [    // 定义页面操作步骤顺序
            this.createPage.bind(this),
            this.openGitLab.bind(this),
            this.loginGitLab.bind(this),
        ]
    }

    //注册网页
    async createPage() {
        if (!this.client) return console.warn("No Client");
        const browser = await this.client.getInstance()
        this.page = await browser.newPage();
    }

    //打开网页
    async openGitLab() {
        if (!this.page) return this.client?.logger.warn("No Page");
        await this.page.goto(this._config.url);
    }

    // 登录
    async loginGitLab() {
        if (!this.page) return this.client?.logger.warn("No Page");

        await this.page.waitForSelector('#username');
        await this.page.waitForSelector('#password');

        await this.page.type('#username', this._config.username);
        await this.page.type('#password', this._config.password);

        await this.page.waitForSelector('button');
        this.page.click('button')
    }

}