
import { nothing, Maybe, of, hasValue, getOrElse, ofNullable } from "./maybe"

type ParseFloatMaybe = (s : string) => Maybe<number>
export const parseFloatMaybe : ParseFloatMaybe = (s_in) => {
    let ret;
    const fval = parseFloat(s_in);
    if (isNaN(fval)) {
        ret = nothing;
    }
    else {
        ret = ofNullable(fval);
    }

    return ret;
} 


type Solve = (m1 : Maybe<number>) => (m2 : Maybe<number>) => (m3 : Maybe<number>) => string
export const solve : Solve = (dX) => (v) => (dT) => {
    let ret = "ちょっと何したいかわかりません・・・"
    const b_dX = !(dX.type === "nothing");
    const b_v = !(v.type === "nothing");
    const b_dT = !(dT.type === "nothing");

    if (b_dX && b_v && b_dT) {
        if (dX.value == v.value * dT.value) {
            ret = "正しい結果です"
        }
        else {
            ret = "間違った計算結果です"
        }
    }
    else if (!b_dX && b_v && b_dT) {
        const ans = v.value * dT.value;
        ret = "⊿Ｘ = " + ans.toString();
    }
    else if (b_dX && !b_v && b_dT) {
        if (dT.value != 0) {
            const ans = dX.value / dT.value;
            ret = "Ｖ = " + ans.toString();
        }
    }
    else if (b_dX && b_v && !b_dT) {
        if (v.value != 0) {
            const ans = dX.value / v.value;
            ret = "⊿Ｔ = " + ans.toString();
        }
    }

    return ret;
}
