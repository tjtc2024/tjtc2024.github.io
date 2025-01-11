let idx = 0;


const msg = [
  "<h1>金星・土星・フォーマルハウト</h1><p>日没後に金星が見えます。</p><p><br>近くに土星と秋の一つ星＝フォーマルハウトが見えてややにぎやかです。</p><img src=\"./imgs/20250101/venus_01.jpg\"><br><img src=\"./imgs/20250101/venus_02.jpg\">", // 0
  "<h1>夏の大三角</h1><img src=\"./imgs/20250101/cyg_01.jpg\"><br><img src=\"./imgs/20250101/cyg_02.jpg\"><br>夏の大三角(ベガ・アルタイル・デネブ)は8月〜12月が見頃です。<br>2月になれば明け方の東の空に見えます。", // 1
  "<h1>カシオペヤ座と秋の四辺形</h1><p>カシオペヤ座とアンドロメダ座</p><img src=\"./imgs/20250101/cas.jpg\"><p>秋の四辺形</p><img src=\"./imgs/20250101/peg.jpg\">", // 2
  "<h1>木星と冬の１等星</h1><p>木星とぎょしゃ座のカペラ,おうし座のアルデバランが見えます。</p><img src=\"./imgs/20250101/jupiter_01.jpg\"><p>秋の四辺形</p><img src=\"./imgs/20250101/jupiter_02.jpg\">", // 3
  "<h1>【深夜撮影】火星・ふたご座・冬の大三角</h1><img src=\"./imgs/20250101/mars.jpg\">", // 4
  "<h1>【深夜撮影】火星・かに座・しし座・うみへび座</h1><img src=\"./imgs/20250101/leo.jpg\">", // 5
  "<h1>【明け方撮影】春の大三角</h1><img src=\"./imgs/20250101/vir.jpg\">", // 6
  "", // 7
  "", // 8
  "", // 9
  ""
]



const nextPage = () => {
  const slide = document.getElementById("slide");
  slide.innerHTML = msg[idx];
  
  if (idx < 6) {
    idx++;
  }
  else {
    idx = 0;
  }
}

