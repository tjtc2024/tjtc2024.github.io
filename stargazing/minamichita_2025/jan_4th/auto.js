
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

let sec_fir = new Section("1. 現地到着", "./imgs/fir.jpg");
sec_fir.appendExpr("曇った北の空がお出迎え");
sec_fir.appendExpr("こうなることも少なくないので、当クラブでは出発前にGPV気象予報の雲量を確認します。");
sects.push(sec_fir);

let sec_uma = new Section("2. 徐々に晴れてきた北の空", "./imgs/uma.jpg");
sec_uma.appendExpr("徐々に晴れてきて、北斗七星と流星群の放射点付近が見えてきました。");
sec_uma.appendExpr("しぶんぎ座という星座は現在使われていない星座で、現在のりゅう座, うしかい座, ヘルクレス座の境界付近にありました。");
sects.push(sec_uma);

let sec_qua_2 = new Section("3. しぶんぎ座流星群", "./imgs/qua.jpg");
sec_qua_2.appendExpr("一瞬でしたが明るい流れ星が見えました。");
sects.push(sec_qua_2);

let sec_spr_1 = new Section("4-1. 春の大三角", "./imgs/spr_1.jpg");
sec_spr_1.appendExpr("近くに見えた春の大三角(アルクトゥルス,スピカ,デネボラ)");
sects.push(sec_spr_1);

let sec_spr_2 = new Section("4-2. 春の大三角", "./imgs/spr_2.jpg");
sec_spr_2.appendExpr("近くに見えた春の大三角(アルクトゥルス,スピカ,デネボラ)");
sects.push(sec_spr_2);

let sec_win_1 = new Section("4-1. 雲に覆われる前の冬の大三角", "./imgs/win_1.jpg");
sec_win_1.appendExpr("雲に覆われる前の冬の大三角(ベテルギウス,シリウス,プロキオン)を探してみましょう。");
sects.push(sec_win_1);

let sec_win_2 = new Section("4-2. 冬の大三角", "./imgs/win_2.jpg");
sec_win_2.appendExpr("西の空に見えた冬の大三角(ベテルギウス,シリウス,プロキオン)");
sects.push(sec_win_2);

let sec_last = new Section("5. 曇ってきたので撤収", "./imgs/last.jpg");
sec_last.appendExpr("AM 3:00 を過ぎると徐々に曇り始め、ついには全天雲に覆われてしまいました。");
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


setInterval(nextPage, 5000);
