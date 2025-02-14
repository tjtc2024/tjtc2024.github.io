

/* SQL */
async function execSqlsJs(sqls) {
    const sqlPromise = initSqlJs({
        locateFile:file=>`./lib/${file}`
    });
    
    document.querySelector("#sql_result").innerHTML = "データベースにアクセス";

    const dataPromise = fetch("stargazing.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    const db = new SQL.Database(new Uint8Array(buf));
  
    

    let sql_result = "";

    
    sqls.forEach(sql => {
        const stmt = db.prepare(sql);
        while( stmt.step() ) {
            let row = stmt.getAsObject();
            let title = row.TITLE;
            if (row.LOCATION) {
                title += "(" + row.LOCATION + ")";
            }
            sql_result += "<h2>" + title + "</h2>";
            sql_result += "<p><img src=\"" + row.IMGPATH + "\"></p>";
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
    if (keyStr.endsWith("座")) {
        const sql1 = "SELECT * FROM IAU WHERE TITLE ='" + keyStr + "';";
        const sql2 = "SELECT * FROM CONSTELLATION WHERE TITLE ='" + keyStr + "';";
        sqls.push(sql1,sql2);

        document.querySelector("#sql_result").innerHTML = "SQL生成";
        execSqlsJs(sqls);
    }
    else if (keyStr.endsWith("流星群")) {
        const sql1 = "SELECT * FROM METEOR WHERE TITLE ='" + keyStr + "';";
        sqls.push(sql1);

        document.querySelector("#sql_result").innerHTML = "SQL生成";
        execSqlsJs(sqls);
    }
    else if (keyStr.startsWith("春の") || keyStr.startsWith("夏の")  || keyStr.startsWith("秋の")  || keyStr.startsWith("冬の")) {
        const sql1 = "SELECT * FROM ASTERISM WHERE TITLE ='" + keyStr + "';";
        sqls.push(sql1);

        document.querySelector("#sql_result").innerHTML = "SQL生成";
        execSqlsJs(sqls);
    }
    else if (keyStr == "金星" || keyStr == "木星" || keyStr == "火星" || keyStr == "土星") {
        const sql1 = "SELECT * FROM PLANET WHERE TITLE ='" + keyStr + "';";
        sqls.push(sql1);

        document.querySelector("#sql_result").innerHTML = "SQL生成";
        execSqlsJs(sqls);
    }
    keyText.value ='';
});
