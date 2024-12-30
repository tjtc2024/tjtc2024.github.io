
import {of} from "./maybe";
import { ofNullable } from "./maybe";
import {bind} from "./maybe";
import { getOrElse } from "./maybe";
import { parseFloatMaybe, solve } from "./solve"


const times2 = (x:number) => of(x*2)

// bind のテスト
const x1 = parseFloatMaybe("3.0");
const y1 = bind (times2) (x1)
const z1 = getOrElse (-1) (y1)
console.log(z1)

const x2 = parseFloatMaybe("5.0");
const y2 = bind (times2) (x2);
const z2 = getOrElse (-1) (y2);
console.log(z2);


const x3 = parseFloatMaybe("");
const y3 = bind (times2) (x3);
const z3 = getOrElse (-1) (y3);
console.log(z3);


// はじき計算
const dX1 = parseFloatMaybe("");
const v1 = parseFloatMaybe("2.0");
const dT1 = parseFloatMaybe("0.5");
console.log(dX1.type);
const ret = solve (dX1) (v1) (dT1);
console.log(ret);



