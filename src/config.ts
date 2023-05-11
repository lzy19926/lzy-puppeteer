

export const browserConfig = {
    default: {
        // 浏览器可执行文件位置
        executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
        // headless模式(即不在电脑屏幕中显示)
        headless: false,
        // 略过SSL验证
        ignoreHTTPSErrors: true,
        // 默认启动页
        args: ['https://www.google.com/']
    },
    // 页面size
    pageSize: {
        width: 0,
        height: 0,
        deviceScaleFactor: 1,
    }
}
