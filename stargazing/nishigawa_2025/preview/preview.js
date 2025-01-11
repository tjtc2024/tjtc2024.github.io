
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


let idx = 0;
let secs = [];

let sec_ven = new Section("夕方の北西：金星・土星・フォーマルハウト", "../imgs/20250101/venus_guide.jpg");
sec_ven.appendExpr("夕方の西の空には宵(よい)の明星：金星が見えます。");
sec_ven.appendExpr("金星の近くには土星と秋の一つ星=フォーマルハウトがあります。");
secs.push(sec_ven);

let sec_cyg = new Section("夕方の北東：冬なのに夏の大三角", "../imgs/20250101/cyg_01_guide.jpg");
sec_cyg.appendExpr("北東の地平線上には夏の大三角(デネブ・ベガ・アルタイル)があります。");
sec_cyg.appendExpr("写真は1月1日に西川公園で撮影したものです。");
sec_cyg.appendExpr("西川公園からは1月12日, 1月18日ごろにはデネブだけがわずかに見えます。");
secs.push(sec_cyg);

let sec_cyg_2 = new Section("夕方の北東：北十字", "../imgs/20250110/cyg_guide.jpg");
sec_cyg_2.appendExpr("地平線付近の白鳥座は北の空の十字架に見えます。");
secs.push(sec_cyg_2);

let sec_cas = new Section("夕方北の空：カシオペヤ座とアンドロメダ座", "../imgs/20250101/cas_guide.jpg");
sec_cas.appendExpr("1月はカシオペヤ座とアンドロメダ座が空高く昇っています。");
sec_cas.appendExpr("カシオペヤ座はこの時期は北の空高くに見えます。");
sec_cas.appendExpr("2等星が多くM字型の星並びに見えます。");
sec_cas.appendExpr("アンドロメダ座も北の空高くに見えます。");
sec_cas.appendExpr("カシオペヤ座もアンドロメダ座も時間を選ばなければ、年中楽しめますが。");
sec_cas.appendExpr("冬は空が澄んでいるので防寒対策ができれば見てみると良いでしょう。");
secs.push(sec_cas);

let sec_peg = new Section("夕方北の空：秋の大四辺形", "../imgs/20250101/peg_guide.jpg");
sec_peg.appendExpr("アンドロメダ座とペガスス座の星を結んでできた四辺形(四角形)は秋の大四辺形と呼ばれています。");
sec_peg.appendExpr("この時期の夕方は天頂付近にあるので比較的見つけやすいです。");
secs.push(sec_peg);

let sec_jup = new Section("夕方東の空：木星, カペラ, アルデバラン", "../imgs/20250101/jupiter_guide.jpg");
sec_jup.appendExpr("東の空には木星が見えます。");
sec_jup.appendExpr("近くにある明るい星はぎょしゃ座のカペラとおうし座のアルデバランです。");
sec_jup.appendExpr("実は来年は木星はもっと東側に移動し、カペラとアルデバランだけになります。");
secs.push(sec_jup);

let sec_jup_2 = new Section("木星の望遠鏡写真", "../imgs/20250101/jupiter_telescope.jpg");
sec_jup_2.appendExpr("木星の望遠鏡写真です。");
sec_jup_2.appendExpr("木星の周りには多数の衛星が周っています。");
sec_jup_2.appendExpr("木星の衛星の発見は文明の発展に非常に大きな影響を与えています。");
sec_jup_2.appendExpr("たとえば、人工衛星による地上観測はこの発見なしにはありえないはずです。");
secs.push(sec_jup_2);

let sec_ori = new Section("オリオン座とシリウス", "../imgs/20250110/ori_guide.jpg");
sec_ori.appendExpr("東の地平線上にはオリオン座が昇ってきます。");
sec_ori.appendExpr("シリウスも昇ってきます。");
secs.push(sec_ori);

let sec_ori_2 = new Section("冬の大三角", "../imgs/20250101/ori_guide.jpg");
sec_ori_2.appendExpr("冬の大三角です。");
secs.push(sec_ori_2);

/**
 * スライド管理
 */

const msgs = secs.map((sec) => sec.toInnerHTML());

const nextPage = () => {
  const slide = document.getElementById("slide");
  slide.innerHTML = msgs[idx];
  
  idx++
  if (idx >= msgs.length) {
    idx = 0;
  }
}

const prevPage = () => {
  const slide = document.getElementById("slide");
  idx--;
  if (idx <= 0) {
    idx = msgs.length-1;
  }
  slide.innerHTML = msgs[idx];
}

