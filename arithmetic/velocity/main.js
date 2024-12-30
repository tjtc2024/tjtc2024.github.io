
const btn = document.getElementById("eval");
const txt1 = document.getElementById("l");
const txt2 = document.getElementById("v");
const txt3 = document.getElementById("t");
const msg = document.getElementById("result");


const solve = (dX_in,V_in,dT_in) => {
    let msg = "？";
    const dX = parseFloat(dX_in);
    const V = parseFloat(V_in);
    const dT = parseFloat(dT_in);

    const b_dX = isNaN(dX);
    const b_V = isNaN(V);
    const b_dT = isNaN(dT);

    if (!b_dX && !b_V && !b_dT) {
        if (dX == V * dT) {
            msg = "正しい計算です : " + dX.toString() + " = " + V.toString() + " × " + dT.toString();
        }
        else {
            msg = "間違った計算です : " + dX.toString() + " ≠ " + V.toString() + " × " + dT.toString();
        }
    }
    else if (b_dX && !b_V && !b_dT) {
        const ret = V * dT;
        msg = "⊿Ｘ = " +  V.toString() + "×" + dT.toString() + " = " + ret.toString();
    }
    else if (!b_dX && b_V && !b_dT) {
        if (Math.abs(dT) > 0.00001) {
            const ret = dX / dT;
            msg = "Ｖ = " + dX.toString() + "÷" + dT.toString() + " = "+ ret.toString();
        }
        else {
            msg = "Ｖが小さすぎます"
        }
    }
    else if (!b_dX && !b_V && b_dT) {
        if (Math.abs(V) > 0.00001) {
            const ret = dX / V;
            msg = "⊿Ｔ = " + dX.toString() + "÷" + V.toString() + " = "+ ret.toString();
        }
        else {
            msg = "⊿Ｔが小さすぎます"
        }
    }

    return msg;
}


const buttonClick = () => {
    const msgResult = solve(txt1.value, txt2.value, txt3.value);
    msg.innerText = msgResult;
};

btn.addEventListener('click', buttonClick);
