/* SQL */
async function execSqlsJs(sqls) {
    const sqlPromise = initSqlJs({
        locateFile:file=>`../lib/${file}`
    });
    
    document.querySelector("#sql_result").innerHTML = "データベースにアクセス";

    const dataPromise = fetch("glossary.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    const db = new SQL.Database(new Uint8Array(buf));
  
    

    let sql_result = "";

    
    sqls.forEach(sql => {
        const stmt = db.prepare(sql);
        while( stmt.step() ) {
            let row = stmt.getAsObject();
            let title = row.TITLE;
            sql_result += "<h2>" + title + "</h2>";
            sql_result += "<p>" + row.EXPR + "</p>";
            if (row.LINK) {
                sql_result += "<h3>関連する用語</h3>"
                sql_result += "<p>" + row.LINK + "</p>";
            }
        }
        stmt.free();
    });
    document.querySelector("#sql_result").innerHTML = sql_result;

    db.close();
}




/* ボタン */
const keyText = document.getElementById('keyText');


/* タイトルを指定して検索 */
keyText.addEventListener('change', () => {
    let keyStr = keyText.value;
    document.querySelector("#sql_result").innerHTML = "検索開始";
    const sqls = [];
    
    const sql1 = "SELECT * FROM GENERIC WHERE TITLE ='" + keyStr + "';";
    sqls.push(sql1);

    document.querySelector("#sql_result").innerHTML = "SQL生成";
    execSqlsJs(sqls);

    keyText.value ='';
});
