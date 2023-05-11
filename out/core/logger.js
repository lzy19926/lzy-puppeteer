"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writableLoggerFactory = void 0;
var utils_1 = require("./utils");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var logFilePath = path_1.default.join(__dirname, "../../logFile/logger.txt");
var msgMap = {
    assert: "LZY-PUPPETEER-ASSERT",
    debug: "LZY-PUPPETEER-DEBUG",
    dirxml: "LZY-PUPPETEER-DIRXML",
    error: "LZY-PUPPETEER-ERROR",
    group: "LZY-PUPPETEER-GROUP",
    info: "LZY-PUPPETEER-INFO",
    log: "LZY-PUPPETEER-LOG",
    warn: "LZY-PUPPETEER-WARN",
};
function createLogFile() {
    try {
        fs_1.default.accessSync(logFilePath);
    }
    catch (err) {
        fs_1.default.writeFileSync(logFilePath, '----------日志文件已成功创建---------\n');
    }
}
function getMsg(type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return "[".concat((0, utils_1.getCurrentDateTime)(), "][").concat(msgMap[type], "]: ")
        + "[".concat(args.join(","), "]")
        + "".concat(os_1.default.EOL);
}
function consoleFnInvoker(type) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        var msg = getMsg(type, args);
        console[type](msg);
        fs_1.default.appendFileSync(logFilePath, msg);
    }
    catch (err) {
        console.error(err);
    }
}
/**自定义logger工厂 写入日志*/
function writableLoggerFactory() {
    createLogFile();
    return {
        assert: function (condition) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["assert", condition], args, false));
        },
        debug: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["debug"], args, false));
        },
        dirxml: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["dirxml"], args, false));
        },
        error: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["error"], args, false));
        },
        group: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["group"], args, false));
        },
        info: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["info"], args, false));
        },
        log: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["log"], args, false));
        },
        warn: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return consoleFnInvoker.apply(void 0, __spreadArray(["warn"], args, false));
        },
    };
}
exports.writableLoggerFactory = writableLoggerFactory;
function test() {
    var logger = writableLoggerFactory();
    logger.assert(false, '123', 345);
    logger.debug('123', 345);
    logger.dirxml('123', 345);
    logger.error('123', 345);
    logger.group('123', 345);
    logger.info('123', 345);
    logger.log('123', 345);
    logger.warn('123', 345);
}
