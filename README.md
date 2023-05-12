## 一个插件化puppeteer操作工具


## 用法

- 注册插件
```ts
import { GitLabPlugin } from './plugins/GitLabPlugin'
 const client = new BroswerClient(browserConfig)

    // GitLab操作插件
    client.addPlugin(new GitLabPlugin({
        url: 'https://gitlab.intra.XXX/users/sign_in',
        username: "luzy",
        password: "*********"
    }))

    client.run()

```

- 插件开发: 在plugins中定义了多个插件,可使用puppeteerAPI进行插件开发
