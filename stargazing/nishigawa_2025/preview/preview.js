
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

let sec_all = new Section("全天図", "../imgs/jan12th.png");
sec_all.appendExpr("夕方の西の空には金星と土星が見えます。");
sec_all.appendExpr("夕方の西の空に見える1等星はフォーマルハウトとデネブがあります。");
sec_all.appendExpr("夕方の東の空には木星と冬の星座の1等星がよく見えます。");
sects.push(sec_all);

let sec_ven_1 = new Section("1. 夕方の北西：金星・土星・フォーマルハウト", "../imgs/20250101/venus_01.jpg");
sec_ven_1.appendExpr("夕方の西の空には宵(よい)の明星：金星が見えます。");
sec_ven_1.appendExpr("金星の近くには土星と秋の一つ星=フォーマルハウトがあります。");
sects.push(sec_ven_1);

let sec_ven_2 = new Section("1-2. 夕方の北西：金星・土星・フォーマルハウト", "../imgs/20250101/venus_guide.jpg");
sec_ven_2.appendExpr("夕方の西の空には宵(よい)の明星：金星が見えます。");
sec_ven_2.appendExpr("金星の近くには土星と秋の一つ星=フォーマルハウトがあります。");
sects.push(sec_ven_2);

let sec_cyg_1 = new Section("2. 夕方の北東：冬なのに夏の大三角", "../imgs/20250101/cyg_01.jpg");
sec_cyg_1.appendExpr("北東の地平線上には夏の大三角(デネブ・ベガ・アルタイル)があります。");
sec_cyg_1.appendExpr("写真は1月1日に西川公園で撮影したものです。");
sec_cyg_1.appendExpr("西川公園からは1月12日, 1月18日ごろにはデネブだけがわずかに見えます。");
sects.push(sec_cyg_1);

let sec_cyg_3 = new Section("3. 夕方の北東：北十字", "../imgs/20250110/cyg_guide.jpg");
sec_cyg_3.appendExpr("地平線付近の白鳥座は北の空の十字架に見えます。");
sects.push(sec_cyg_3);

let sec_cas_1 = new Section("4-1. 夕方北の空：カシオペヤ座とアンドロメダ座", "../imgs/20250101/cas.jpg");
sec_cas_1.appendExpr("1月はカシオペヤ座とアンドロメダ座が空高く昇っています。");
sec_cas_1.appendExpr("カシオペヤ座はこの時期は北の空高くに見えます。");
sec_cas_1.appendExpr("2等星が多くM字型の星並びに見えます。");
sec_cas_1.appendExpr("アンドロメダ座も北の空高くに見えます。");
sec_cas_1.appendExpr("カシオペヤ座もアンドロメダ座も時間を選ばなければ、年中楽しめますが。");
sec_cas_1.appendExpr("冬は空が澄んでいるので防寒対策ができれば見てみると良いでしょう。");
sects.push(sec_cas_1);

let sec_cas_2 = new Section("4-2. 夕方北の空：カシオペヤ座とアンドロメダ座", "../imgs/20250101/cas_guide.jpg");
sec_cas_2.appendExpr("1月はカシオペヤ座とアンドロメダ座が空高く昇っています。");
sec_cas_2.appendExpr("カシオペヤ座はこの時期は北の空高くに見えます。");
sec_cas_2.appendExpr("2等星が多くM字型の星並びに見えます。");
sec_cas_2.appendExpr("アンドロメダ座も北の空高くに見えます。");
sec_cas_2.appendExpr("カシオペヤ座もアンドロメダ座も時間を選ばなければ、年中楽しめますが。");
sec_cas_2.appendExpr("冬は空が澄んでいるので防寒対策ができれば見てみると良いでしょう。");
sects.push(sec_cas_2);

let sec_peg_1 = new Section("5-1. 夕方北の空：秋の大四辺形", "../imgs/20250101/peg.jpg");
sec_peg_1.appendExpr("アンドロメダ座とペガスス座の星を結んでできた四辺形(四角形)は秋の大四辺形と呼ばれています。");
sec_peg_1.appendExpr("この時期の夕方は天頂付近にあるので比較的見つけやすいです。");
sects.push(sec_peg_1);

let sec_peg_2 = new Section("5-2. 夕方北の空：秋の大四辺形", "../imgs/20250101/peg_guide.jpg");
sec_peg_2.appendExpr("アンドロメダ座とペガスス座の星を結んでできた四辺形(四角形)は秋の大四辺形と呼ばれています。");
sec_peg_2.appendExpr("この時期の夕方は天頂付近にあるので比較的見つけやすいです。");
sects.push(sec_peg_2);

let sec_jup_1 = new Section("6-1. 夕方東の空：木星, カペラ, アルデバラン", "../imgs/20250101/jupiter_02.jpg");
sec_jup_1.appendExpr("東の空には木星が見えます。");
sec_jup_1.appendExpr("近くにある明るい星はぎょしゃ座のカペラとおうし座のアルデバランです。");
sec_jup_1.appendExpr("実は来年は木星はもっと東側に移動し、カペラとアルデバランだけになります。");
sects.push(sec_jup_1);

let sec_jup_2 = new Section("6-2. 夕方東の空：木星, カペラ, アルデバラン", "../imgs/20250101/jupiter_guide.jpg");
sec_jup_2.appendExpr("東の空には木星が見えます。");
sec_jup_2.appendExpr("近くにある明るい星はぎょしゃ座のカペラとおうし座のアルデバランです。");
sec_jup_2.appendExpr("実は来年は木星はもっと東側に移動し、カペラとアルデバランだけになります。");
sects.push(sec_jup_2);

let sec_tel = new Section("7. 木星の望遠鏡写真", "../imgs/20250101/jupiter_telescope.jpg");
sec_tel.appendExpr("木星の望遠鏡写真です。");
sec_tel.appendExpr("木星の周りには多数の衛星が周っています。");
sec_tel.appendExpr("木星の衛星の発見は文明の発展に非常に大きな影響を与えています。");
sec_tel.appendExpr("たとえば、人工衛星による地上観測はこの発見なしにはありえないはずです。");
sects.push(sec_tel);

let sec_ori_1 = new Section("8. 夕方東の空：オリオン座とシリウス", "../imgs/20250110/ori.jpg");
sec_ori_1.appendExpr("東の地平線上にはオリオン座が昇ってきます。");
sec_ori_1.appendExpr("おおいぬ座のシリウスも昇ってきます。");
sec_ori_1.appendExpr("シリウスは星座をつくっている星たちの中で最も明るい星です。");
sects.push(sec_ori_1);

let sec_mars_1 = new Section("9-1. 真夜中東の空：冬の大三角と火星", "../imgs/20250101/mars.jpg");
sec_mars_1.appendExpr("夜中になるにつれて冬の大三角(ベテルギウス,シリウス,プロキオン)も昇ってきます。");
sec_mars_1.appendExpr("ベテルギウスはオリオン座の1等星");
sec_mars_1.appendExpr("シリウスはおおいぬ座の1等星");
sec_mars_1.appendExpr("プロキオンはこいぬ座の1等星");
sec_mars_1.appendExpr("この時期は、火星が冬の大三角付近に見えます。");
sects.push(sec_mars_1);


let sec_mars_2 = new Section("9-2. 真夜中東の空：冬の大三角と火星", "../imgs/20250101/mars_guide.jpg");
sec_mars_2.appendExpr("夜中になるにつれて冬の大三角(ベテルギウス,シリウス,プロキオン)も昇ってきます。");
sec_mars_2.appendExpr("ベテルギウスはオリオン座の1等星");
sec_mars_2.appendExpr("シリウスはおおいぬ座の1等星");
sec_mars_2.appendExpr("プロキオンはこいぬ座の1等星");
sec_mars_2.appendExpr("この時期は、火星が冬の大三角付近に見えます。");
sects.push(sec_mars_2);

let sec_uma_1 = new Section("10. 深夜東の空：北斗七星","../imgs/20250101/uma_guide.jpg");
sec_uma_1.appendExpr("明け方に北東の空から昇るおおぐま座です。");
sec_uma_1.appendExpr("おおぐま座のしっぽの部分はひしゃくに似ています。");
sec_uma_1.appendExpr("北斗七星と呼ばれています");
sects.push(sec_uma_1);

let sec_uma_2 = new Section("10. 深夜東の空：北斗七星","../imgs/20250101/uma_guide.jpg");
sec_uma_2.appendExpr("明け方に北東の空から昇るおおぐま座です。");
sec_uma_2.appendExpr("おおぐま座のしっぽの部分はひしゃくに似ています。");
sec_uma_2.appendExpr("北斗七星と呼ばれています");
sects.push(sec_uma_2);

let sec_leo = new Section("11. 深夜東の空：しし座, うみへび座","../imgs/20250101/leo_guide.jpg");
sec_leo.appendExpr("明け方に南東の空から昇るしし座とうみへび座です。");
sec_leo.appendExpr("しし座の頭の部分は ? を逆にしたようなかたちでししの大鎌と呼ばれています");
sects.push(sec_leo);

let sec_vir = new Section("12. 深夜東の空：春の大三角","../imgs/20250101/vir_guide.jpg");
sec_vir.appendExpr("明け方に東の空から昇る春の大三角の星(アルクトゥルス, スピカ, デネボラ)たちです。");
sec_vir.appendExpr("アルクトゥルスはうしかい座の1等星");
sec_vir.appendExpr("スピカはおとめ座の1等星");
sec_vir.appendExpr("デネボラはしし座の2等星");
sects.push(sec_vir);


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

