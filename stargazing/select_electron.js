/* SQL */
async function execSqlsJs(sqls) {
    const sqlPromise = initSqlJs({
        locateFile:file=>`./lib/${file}`
    });

    const dataPromise = fetch("stargazing.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    const db = new SQL.Database(new Uint8Array(buf));
  
    

    let sql_result = "<h2>登録キーワード一覧</h2>";

    
    sqls.forEach(sql => {
        const stmt = db.prepare(sql);
        while( stmt.step() ) {
            let row = stmt.getAsObject();
            let title = row.TITLE;
            sql_result += "<p><a href=\"./request_electron.html?key=" + title + "\">" + title + "</a></p>";
        }
        stmt.free();
    });
    document.querySelector("#sql_result").innerHTML = sql_result;

    db.close();
}

const sqls = [];
const sql1 = "SELECT DISTINCT TITLE FROM CONSTELLATION;";
sqls.push(sql1);
const sql2 = "SELECT DISTINCT TITLE FROM ASTERISM;";
sqls.push(sql2);
const sql3 = "SELECT DISTINCT TITLE FROM METEOR;";
sqls.push(sql3);

document.querySelector("#sql_result").innerHTML = "SQL生成";
execSqlsJs(sqls);