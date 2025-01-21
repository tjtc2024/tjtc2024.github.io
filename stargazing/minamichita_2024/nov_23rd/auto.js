
/* セクション管理クラス */
class Section {
  /**
   * タイトルと説明する画像を設定
   * @param {*} title 
   * @param {*} imgPath 
   */
  constructor(title, imgPath) {
    this.title = "<h1>" + title + "</h1>";
    if (imgPath.endsWith(".jpg") || imgPath.endsWith(".png")) {
      this.imgPath = "<img src=\"" + imgPath + "\">";
    }
    else if (imgPath.endsWith(".mp4")) {
      this.imgPath = "<video controls src=\"" + imgPath + "\"></video>";
    }
    this.messages = [];
  }

  /**
   * 説明の追加
   * @param {*} line 
   */
  appendExpr(line) {
    this.messages.push("<p>" + line + "</p>");
  }

  /**
   * HTMLとして出力
   * @returns
   */
  toInnerHTML() {
    let ret = this.title;
    ret += this.imgPath;
    for (var n = 0; n < this.messages.length; n++) {
      ret += this.messages[n];
    }
    return ret;
  }
}


let idx = -1;
let sects = [];

let sec_tau = new Section("1-1. 木星, おうし座, プレアデス星団, 冬の大三角", "./imgs/tau_and_win.jpg");
sec_tau.appendExpr("木星, おうし座, プレアデス星団, 冬の大三角が写っています。");
sects.push(sec_tau);

let sec_tau_2 = new Section("1-2. 木星, おうし座, プレアデス星団, 冬の大三角", "./imgs/tau_and_win_guide.jpg");
sec_tau_2.appendExpr("木星, おうし座, プレアデス星団, 冬の大三角が写っています。");
sects.push(sec_tau_2);

let sec_dia = new Section("2-1. 木星と冬のダイヤモンド", "./imgs/diamond.jpg");
sec_dia.appendExpr("冬のダイヤモンド(カペラ,アルデバラン,プロキオン,リゲル,シリウス)とベテルギウスが写っています。");
sects.push(sec_dia);

let sec_dia_2 = new Section("2-2. 木星と冬のダイヤモンド", "./imgs/diamond_guide.jpg");
sec_dia_2.appendExpr("冬のダイヤモンド(カペラ,アルデバラン,プロキオン,リゲル,シリウス)とベテルギウスが写っています。");
sec_dia_2.appendExpr("全天で最も華やかです。");
sects.push(sec_dia_2);

let sec_car_1 = new Section("3-1. カノープスと冬の大三角(1)", "./imgs/win_car_1.jpg");
sec_car_1.appendExpr("全天で最も明るい恒星：シリウスと２番目に明るい恒星：カノープスが同時に見えます。");
sects.push(sec_car_1);

let sec_car_1g = new Section("3-2. カノープスと冬の大三角(1)", "./imgs/win_car_1_guide.jpg");
sec_car_1g.appendExpr("全天で最も明るい恒星：シリウスと２番目に明るい恒星：カノープスが同時に見えます。");
sec_car_1g.appendExpr("ただし、地平線上で見つけにくいので、スマートフォン撮影や双眼鏡を使うと良いでしょう。");
sects.push(sec_car_1g);

let sec_car_2 = new Section("4. カノープスと冬の大三角(2)", "./imgs/win_car_2.jpg");
sec_car_2.appendExpr("全天で最も明るい恒星：シリウスと２番目に明るい恒星：カノープスが同時に見えます。");
sects.push(sec_car_2);

let sec_car_3 = new Section("5. カノープスと冬の大三角(3)", "./imgs/win_car_3.jpg");
sec_car_3.appendExpr("全天で最も明るい恒星：シリウスと２番目に明るい恒星：カノープスが同時に見えます。");
sects.push(sec_car_3);




/**
 * スライド管理
 */

const msgs = sects.map((sec) => sec.toInnerHTML());

const nextPage = () => {
  const slide = document.getElementById("slide");
  idx++
  if (idx >= msgs.length) {
    idx = 0;
  }
  slide.innerHTML = msgs[idx];
}

setInterval(nextPage, 5000);