

function null2empty(obj) {
  return (obj != null) ? obj : "-";
}

function dumprow(row) {
  let rowStr = row.IAU_NAME;
  rowStr += "(" + null2empty(row.NAME_JA) + ")";
  rowStr += ",バイエル符号=" + row.CON + " " + row.CODE;
  rowStr += ",等級=" + row.VMAG;
  rowStr += ",赤経=" + row.RA_J2000;
  rowStr += ",赤緯=" + row.DEC_J2000;
  rowStr += "<br>"

  return rowStr;
}


/* SQL */
async function execSqljs(sql) {
  const sqlPromise = initSqlJs({
      locateFile:file=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`
  });
  
  const dataPromise = fetch("stars.db").then(res => res.arrayBuffer());
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
  let sql = "SELECT * FROM IAU WHERE CON=\'" + keyText.value + "\';";
  execSqljs(sql);
}

/* 全検索 */
function buttonAllClick() {
  let sql = "SELECT * FROM IAU ORDER BY CON;";
  execSqljs(sql);
}

/* イベント登録 */
searchButton.addEventListener('click', butotnClick);
searchAllButton.addEventListener('click', buttonAllClick);