

const DICT_PATH = "./dict";

/* ボタン */
let keyText = document.getElementById('keyText');
let searchButton = document.getElementById('searchButton');

function butotnClick(){
  document.querySelector("#result").innerHTML = "";
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    let tokens = tokenizer.tokenize(keyText.value); // 解析データの取得
    tokens.forEach( (token) => {
      //document.querySelector("#result").innerHTML += JSON.stringify(token) + "<br>";
      document.querySelector("#result").innerHTML += token.surface_form +"<br>";
    });
  });
}

/* イベント登録 */
searchButton.addEventListener('click', butotnClick);