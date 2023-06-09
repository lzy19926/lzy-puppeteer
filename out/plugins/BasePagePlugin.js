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
var BasePagePlugin = /** @class */ (function () {
    function BasePagePlugin(config) {
        this.name = config.name || "Unnamed Plugin";
        this.client = undefined;
        this.page = undefined;
        this.steps = [];
        this.addListenerToPage();
    }
    // 监听Page设置变化  注入clientPage列表
    BasePagePlugin.prototype.addListenerToPage = function () {
        Object.defineProperty(this, "page", {
            enumerable: true,
            get: function () {
                return this._page;
            },
            set: function (page) {
                this._page = page;
                this.onPageReady(page);
            }
        });
    };
    // page实例化完成后的回调
    BasePagePlugin.prototype.onPageReady = function (page) {
        var _a;
        console.log("------inject page------");
        this.setViewport();
        (_a = this.client) === null || _a === void 0 ? void 0 : _a.pages.add(page);
    };
    // 属性未注册捕获 错误处理
    BasePagePlugin.prototype.checkProps = function () {
        var _a;
        if (!this.client || !this.page) {
            (_a = this.client) === null || _a === void 0 ? void 0 : _a.logger.warn("props xxx undefined");
            return false;
        }
        return true;
    };
    // 注入client
    BasePagePlugin.prototype.regist = function (client) {
        this.client = client;
    };
    // 设置屏幕大小
    BasePagePlugin.prototype.setViewport = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var pageSize;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.page)
                            return [2 /*return*/, (_a = this.client) === null || _a === void 0 ? void 0 : _a.logger.warn("No Page")];
                        pageSize = (_b = this.client) === null || _b === void 0 ? void 0 : _b.config.pageSize;
                        return [4 /*yield*/, this.page.setViewport(pageSize)];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 使用普通forEach无法进行异步遍历, 需要使用PromiseChain进行链式循环
    BasePagePlugin.prototype.call = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promiseChain, _loop_1, _i, _a, step;
            return __generator(this, function (_b) {
                promiseChain = Promise.resolve();
                _loop_1 = function (step) {
                    promiseChain = promiseChain.then(function () { return step(); });
                };
                for (_i = 0, _a = this.steps; _i < _a.length; _i++) {
                    step = _a[_i];
                    _loop_1(step);
                }
                return [2 /*return*/, promiseChain];
            });
        });
    };
    return BasePagePlugin;
}());
exports.default = BasePagePlugin;
