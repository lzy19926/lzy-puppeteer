const { command } = require("execa");
// /k表示执行完毕后不关闭

(async () => {
    const cmdStream = command('start cmd /k', { shell: true });


    // 使用`for await..of`遍历输出流
    for await (const chunk of cmdStream.stdout) {
        console.log(chunk.toString()); // 打印 stdout
    }
    // 向控制台写入两条语句 
    cmdStream.stdin.write("echo \"Hello, world!\"\n");
    cmdStream.stdin.write("dir\n");
})();