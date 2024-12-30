"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrElse = exports.bind = exports.flatten = exports.map = exports.hasValue = exports.ofNullable = exports.nothing = exports.of = void 0;
// 実装
var of = function (value) { return ({ type: "just", value: value }); };
exports.of = of;
exports.nothing = { type: "nothing" };
var ofNullable = function (value) { return value === undefined || value === null ? ({ type: "nothing" }) : ({ type: "just", value: value }); };
exports.ofNullable = ofNullable;
var hasValue = function (m) { return m.type === "just"; };
exports.hasValue = hasValue;
var map = function (f) { return function (m) { return m.type === "nothing" ? ({ type: "nothing" }) : (0, exports.of)(f(m.value)); }; };
exports.map = map;
//export const map: MapMaybe = (f) => (m) => m.type === "nothing" ? ({ type: "nothing"}) : of(f(m.value))
var flatten = function (mm) { return mm.type === "nothing" ? ({ type: "nothing" }) : mm.value; };
exports.flatten = flatten;
var bind = function (f) { return function (m) { return m.type === "nothing" ? ({ type: "nothing" }) : f(m.value); }; };
exports.bind = bind;
var getOrElse = function (a) { return function (m) { return m.type === "nothing" ? a : m.value; }; };
exports.getOrElse = getOrElse;
