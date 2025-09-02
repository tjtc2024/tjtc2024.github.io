
let arg_degree = 0;
function buttonPushed1() {
    const arcsec_current = parseFloat(document.getElementById("parallax").value);
    arg_degree = arcsec_current / 3600;
    document.getElementById("degree").textContent = "年周視差(°)：" + String(arg_degree);
}

let arg_radian = 0;
let result_au = 0;
function buttonPushed2() {
    if (arg_degree > 0) {
        arg_radian = 2 * Math.PI * arg_degree / 360;
        result_au = 1 / arg_radian;
        document.getElementById("result_au").textContent = "恒星までの距離(天文単位)：" + String(result_au);
        document.getElementById("result_ly").textContent = "恒星までの距離(光年)：" + String(result_au / 63241.07708424);
    }
}
