import BasePagePlugin from './BasePagePlugin'
import type { LoginConfig } from '../core/type'


/**
 * 伏羲页面操作插件
*/
export class VIII_ManagePlugin extends BasePagePlugin {

    private _config: LoginConfig

    constructor(config: LoginConfig) {
        super()
        this._config = config
        this.steps = [    // 定义页面操作步骤顺序
            this.createPage.bind(this),
            this.openGitLab.bind(this),
            this.loginGitLab.bind(this),
            this.toTimesheet.bind(this)
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

        await this.page.waitForSelector('#userName_label');
        await this.page.waitForSelector('#passWord_label');

        await this.page.type('#userName_label', this._config.username);
        await this.page.type('#passWord_label', this._config.password);

        await this.page.waitForSelector('#btnSure');
        this.page.click('#btnSure')
    }

    //TODO 进入工时表(8m由iframe嵌套实现,需要进入)
    async toTimesheet() {

    }
}