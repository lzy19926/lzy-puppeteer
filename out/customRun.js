"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BroswerClient_1 = require("./core/BroswerClient");
var GitLabPlugin_1 = require("./plugins/GitLabPlugin");
var FuXiPlugin_1 = require("./plugins/FuXiPlugin");
var ChatPlusPlugin_1 = require("./plugins/ChatPlusPlugin");
var ZoomEyePlugin_1 = require("./plugins/ZoomEyePlugin");
var config_1 = require("./config");
var _8ManagePlugin_1 = require("./plugins/8ManagePlugin");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var client;
    return __generator(this, function (_a) {
        client = new BroswerClient_1.BroswerClient(config_1.browserConfig);
        // GitLab操作插件
        client.addPlugin(new GitLabPlugin_1.GitLabPlugin({
            name: "GitLab操作插件",
            url: 'https://gitlab.intra.knownsec.com/users/sign_in',
            username: "luzy",
            password: "Luzeya19926_4"
        }));
        // 伏羲操作插件
        client.addPlugin(new FuXiPlugin_1.FuXiPlugin({
            name: "伏羲操作插件",
            url: 'https://fx.intra.knownsec.com/login',
            username: "luzy",
            password: "Luzeya19926_4"
        }));
        // ChatPlus操作插件
        client.addPlugin(new ChatPlusPlugin_1.ChatPlusPlugin({
            name: "ChatPlus操作插件",
            url: 'https://chatplus.top/login',
            username: "luzy",
            password: "Sd4!sT9uL0kM2oX8%c"
        }));
        // ZoomEye操作插件(91环境)
        client.addPlugin(new ZoomEyePlugin_1.ZoomEyePlugin({
            name: "ZoomEye操作插件(91环境)",
            url: 'https://10.8.250.91/login',
            username: "admin",
            password: "1qaz@WSX#EDC"
        }));
        // ZoomEye操作插件(92环境)
        client.addPlugin(new ZoomEyePlugin_1.ZoomEyePlugin({
            name: "ZoomEye操作插件(92环境)",
            url: 'https://10.8.250.92/login',
            username: "admin",
            password: "1qaz@WSX#EDC"
        }));
        // 8M操作插件
        client.addPlugin(new _8ManagePlugin_1.VIII_ManagePlugin({
            name: "8M操作插件",
            url: 'https://xm.intra.knownsec.com/8thManage/login.jsp',
            username: "luzy",
            password: "Luzeya19926_4"
        }));
        client.run();
        // TODO 获取插件名称
        setTimeout(function () {
            console.log(client.plugins.keys());
        }, 2000);
        return [2 /*return*/];
    });
}); })();
