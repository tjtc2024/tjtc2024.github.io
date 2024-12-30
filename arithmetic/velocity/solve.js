"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.parseFloatMaybe = void 0;
var maybe_1 = require("./maybe");
var parseFloatMaybe = function (s_in) {
    var ret;
    var fval = parseFloat(s_in);
    if (isNaN(fval)) {
        ret = maybe_1.nothing;
    }
    else {
        ret = (0, maybe_1.ofNullable)(fval);
    }
    return ret;
};
exports.parseFloatMaybe = parseFloatMaybe;
var solve = function (dX) { return function (v) { return function (dT) {
    var ret = "ちょっと何したいかわかりません・・・";
    var b_dX = !(dX.type === "nothing");
    var b_v = !(v.type === "nothing");
    var b_dT = !(dT.type === "nothing");
    if (b_dX && b_v && b_dT) {
        if (dX.value == v.value * dT.value) {
            ret = "正しい結果です";
        }
        else {
            ret = "間違った計算結果です";
        }
    }
    else if (!b_dX && b_v && b_dT) {
        var ans = v.value * dT.value;
        ret = "⊿Ｘ = " + ans.toString();
    }
    else if (b_dX && !b_v && b_dT) {
        if (dT.value != 0) {
            var ans = dX.value / dT.value;
            ret = "Ｖ = " + ans.toString();
        }
    }
    else if (b_dX && b_v && !b_dT) {
        if (v.value != 0) {
            var ans = dX.value / v.value;
            ret = "⊿Ｔ = " + ans.toString();
        }
    }
    return ret;
}; }; };
exports.solve = solve;
