

function null2empty(obj) {
  return (obj != null) ? obj : "(未記入)";
}

function dumprow(row) {
  let rowStr = row.NAME;
  rowStr += ",日本名=" + null2empty(row.NAME_JA);
  rowStr += ",バイエル符号=" + row.STA + " " + row.CODE;
  rowStr += ",等級=" + row.VMAG;
  rowStr += ",赤経(°)=" + row.RA_DEG;
  rowStr += ",赤緯(°)=" + row.DEC_DEG;
  rowStr += "<br>"

  return rowStr;
}


/* SQL */
async function execSqljs(sql) {
  const sqlPromise = initSqlJs({
      locateFile:file=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`
  });
  
  const dataPromise = fetch("hipparcos_ja.db").then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  const db = new SQL.Database(new Uint8Array(buf));

  const stmt = db.prepare(sql);
  let sql_result = "";
  while( stmt.step() ) {
      let row = stmt.getAsObject();
      //sql_result += JSON.stringify(row) + "<br>";
      sql_result += dumprow(row);
  }
  document.querySelector("#sql_result").innerHTML = sql_result;
  
  stmt.free();
  db.close();
}


/* ボタン */
let keyText = document.getElementById('keyText');
let searchButton = document.getElementById('searchButton');
let searchAllButton = document.getElementById('searchAllButton');

/* 星座名を指定して検索 */
function butotnClick(){
  let sql = "SELECT * FROM PROPER_NAMES INNER JOIN BAYER_CODES ON PROPER_NAMES.HIP = BAYER_CODES.HIP INNER JOIN COORDINATES ON PROPER_NAMES.HIP = COORDINATES.HIP WHERE BAYER_CODES.STA=\'" + keyText.value + "\'";
  execSqljs(sql);
}

/* 全検索 */
function buttonAllClick() {
  let sql = "SELECT * FROM PROPER_NAMES INNER JOIN BAYER_CODES ON PROPER_NAMES.HIP = BAYER_CODES.HIP INNER JOIN COORDINATES ON PROPER_NAMES.HIP = COORDINATES.HIP ORDER BY BAYER_CODES.STA";
  execSqljs(sql);
}

/* イベント登録 */
searchButton.addEventListener('click', butotnClick);
searchAllButton.addEventListener('click', buttonAllClick);