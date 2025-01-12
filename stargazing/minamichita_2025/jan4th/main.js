
/* セクション管理クラス */
class Section {
  /**
   * タイトルと説明する画像を設定
   * @param {*} title 
   * @param {*} imgPath 
   */
  constructor(title, imgPath) {
    this.title = "<h1>" + title + "</h1>";
    this.imgPath = "<img src=\"" + imgPath + "\">";
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

let sec_fir = new Section("1. 現地到着", "./imgs/fir.jpg");
sec_fir.appendExpr("曇った北の空がお出迎え");
sec_fir.appendExpr("こうなることも少なくないので、当クラブでは出発前にGPV気象予報の雲量を確認します");
sects.push(sec_fir);

let sec_qua = new Section("2. しぶんぎ座流星群", "./imgs/qua.jpg");
sec_qua.appendExpr("時々明るい流れ星が見えました。");
sects.push(sec_qua);

let sec_spr = new Section("3. 春の大三角", "./imgs/spr.jpg");
sec_spr.appendExpr("近くに見えた春の大三角(アルクトゥルス,スピカ,デネボラ)");
sects.push(sec_spr);

let sec_win = new Section("4. 冬の大三角", "./imgs/win.jpg");
sec_win.appendExpr("西の空に見えた冬の大三角(ベテルギウス,シリウス,プロキオン)");
sec_win.appendExpr("このあとすぐ空一面雲におおわれてしまいました。");
sects.push(sec_win);

let sec_last = new Section("5. 曇ってきた北の空","./imgs/last.jpg");
sec_last.appendExpr("AM 3:00 を過ぎると北の空も空一面雲におおわれてしまいました。");
sects.push(sec_last);


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

const prevPage = () => {
  const slide = document.getElementById("slide");
  idx--;
  if (idx <= 0) {
    idx = msgs.length-1;
  }
  slide.innerHTML = msgs[idx];
}

