import { BroswerClient } from './core/BroswerClient'
import { GitLabPlugin } from './plugins/GitLabPlugin'
import { FuXiPlugin } from './plugins/FuXiPlugin'
import { ChatPlusPlugin } from './plugins/ChatPlusPlugin'
import { ZoomEyePlugin } from './plugins/ZoomEyePlugin'
import { browserConfig } from './config'




(async () => {
    const client = new BroswerClient(browserConfig)


    // GitLab操作插件
    client.addPlugin(new GitLabPlugin({
        url: 'https://gitlab.intra.knownsec.com/users/sign_in',
        username: "luzy",
        password: "*********"
    }))
    // 伏羲操作插件
    client.addPlugin(new FuXiPlugin({
        url: 'https://fx.intra.knownsec.com/login',
        username: "luzy",
        password: "*********"
    }))
    // ChatPlus操作插件
    client.addPlugin(new ChatPlusPlugin({
        url: 'https://chatplus.top/login',
        username: "luzy",
        password: "*********"
    }))
    // ZoomEye操作插件(91环境)
    client.addPlugin(new ZoomEyePlugin({
        url: 'https://10.8.250.91/login',
        username: "admin",
        password: "1qaz@WSX#EDC"
    }))
    // ZoomEye操作插件(92环境)
    client.addPlugin(new ZoomEyePlugin({
        url: 'https://10.8.250.92/login',
        username: "admin",
        password: "1qaz@WSX#EDC"
    }))


    client.run()

    // await browser.close()
})();