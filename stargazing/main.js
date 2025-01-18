
/* SQL */
async function execSqljs(sql) {
    const sqlPromise = initSqlJs({
        locateFile:file=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`
    });
    
    document.querySelector("#sql_result").innerHTML = "データベースにアクセス";

    const dataPromise = fetch("stargazing.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    const db = new SQL.Database(new Uint8Array(buf));
  
    document.querySelector("#sql_result").innerHTML = "SQL実行";

    const stmt = db.prepare(sql);
    let sql_result = "";
    while( stmt.step() ) {
        let row = stmt.getAsObject();
        sql_result += "<h2>" + row.TITLE + "</h2>";
        sql_result += "<p><img src=\"" + row.IMGPATH + "\"></p>";
    }
    document.querySelector("#sql_result").innerHTML = sql_result;

    stmt.free();
    db.close();
}


/* ボタン */
let keyText = document.getElementById('keyText');
let searchButton = document.getElementById('searchButton');
  
/* タイトルを指定して検索 */
function butotnClick() {
    let sql = "SELECT * FROM CONSTELLATION WHERE TITLE ='" + keyText.value + "\';";
    execSqljs(sql);
}
  
/* イベント登録 */
searchButton.addEventListener('click', butotnClick);