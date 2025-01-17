
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

let sec_fir = new Section("1. 冬のダイヤモンドと惑星たち(木星・火星)", "./imgs/diamond.jpg");
sec_fir.appendExpr("冬のダイヤモンドの中に木星と火星がいます。どこにいるかわかりますか？");
sects.push(sec_fir);

let sec_qua_1 = new Section("2. 冬の大三角とカノープス", "./imgs/hazu.jpg");
sec_qua_1.appendExpr("師崎で撮影した冬の大三角とカノープス");
sects.push(sec_qua_1);

let sec_qua_2 = new Section("3. 北西のカシオペヤ座, アンドロメダ座", "./imgs/cas.jpg");
sec_qua_2.appendExpr("カシオペヤ座とアンドロメダ座周辺です。プレアデス星団も写っています");
sects.push(sec_qua_2);



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
  if (idx < 0) {
    idx = msgs.length-1;
  }
  slide.innerHTML = msgs[idx];
}

