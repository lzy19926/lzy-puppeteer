"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDateTime = void 0;
/**获取当前时间*/
function getCurrentDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var date = String(now.getDate()).padStart(2, '0');
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
exports.getCurrentDateTime = getCurrentDateTime;
