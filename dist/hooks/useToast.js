var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { nanoid } from "nanoid";
import { useState } from "react";
var useToast = function () {
    var _a = useState([]), toasts = _a[0], setToasts = _a[1];
    var showToast = function (message) {
        var toast = {
            id: nanoid(),
            message: message,
            type: "failure",
        };
        setToasts(function (prevToasts) { return __spreadArray(__spreadArray([], prevToasts, true), [toast], false); });
        setTimeout(function () {
            removeToast(toast.id);
        }, 3 * 1000);
    };
    var removeToast = function (id) {
        setToasts(function (prevToasts) { return prevToasts.filter(function (toast) { return toast.id !== id; }); });
    };
    return { toasts: toasts, setToasts: setToasts, showToast: showToast, removeToast: removeToast };
};
export { useToast };
