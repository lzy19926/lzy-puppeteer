"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIII_ManagePlugin = void 0;
var BasePagePlugin_1 = __importDefault(require("./BasePagePlugin"));
/**
 * 8Manager页面操作插件
*/
var VIII_ManagePlugin = /** @class */ (function (_super) {
    __extends(VIII_ManagePlugin, _super);
    function VIII_ManagePlugin(config) {
        var _this = _super.call(this, config) || this;
        _this._config = config;
        _this.steps = [
            _this.createPage.bind(_this),
            _this.openGitLab.bind(_this),
            _this.loginGitLab.bind(_this),
            _this.toTimesheet.bind(_this)
        ];
        return _this;
    }
    //注册网页
    VIII_ManagePlugin.prototype.createPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var browser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.client)
                            return [2 /*return*/, console.warn("No Client")];
                        return [4 /*yield*/, this.client.getInstance()];
                    case 1:
                        browser = _b.sent();
                        _a = this;
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        _a.page = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //打开网页
    VIII_ManagePlugin.prototype.openGitLab = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.page)
                            return [2 /*return*/, (_a = this.client) === null || _a === void 0 ? void 0 : _a.logger.warn("No Page")];
                        return [4 /*yield*/, this.page.goto(this._config.url)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 登录
    VIII_ManagePlugin.prototype.loginGitLab = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.page)
                            return [2 /*return*/, (_a = this.client) === null || _a === void 0 ? void 0 : _a.logger.warn("No Page")];
                        return [4 /*yield*/, this.page.waitForSelector('#userName_label')];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.page.waitForSelector('#passWord_label')];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.page.type('#userName_label', this._config.username)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.page.type('#passWord_label', this._config.password)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.page.waitForSelector('#btnSure')];
                    case 5:
                        _b.sent();
                        this.page.click('#btnSure');
                        return [2 /*return*/];
                }
            });
        });
    };
    //TODO 进入工时表(8m由iframe嵌套实现,需要进入)
    VIII_ManagePlugin.prototype.toTimesheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return VIII_ManagePlugin;
}(BasePagePlugin_1.default));
exports.VIII_ManagePlugin = VIII_ManagePlugin;
