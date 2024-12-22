let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let img;
let imgload = false;

/* SQL */
async function execSqljs(sql) {
    const sqlPromise = initSqlJs({
        locateFile:file=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`
    });
    
    const dataPromise = fetch("photos.db").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    const db = new SQL.Database(new Uint8Array(buf));
  
    const stmt = db.prepare(sql);
    let sql_result = "";
    let img_result = "";
    while( stmt.step() ) {
        let row = stmt.getAsObject();
        sql_result += "主な星：" + row.PRIMARY + "<br>";
        sql_result += "季節：" + row.SEASON + "<br>";
        img_result = row.IMGPATH;
    }
    document.querySelector("#sql_result").innerHTML = sql_result;

    if (imgload) {
        document.body.removeChild(img);    
    }

    imgload = true;
    img = document.createElement('img');
    img.src = img_result;
    document.body.appendChild(img);

    stmt.free();
    db.close();
}


/* ボタン */
let keyText = document.getElementById('keyText');
let searchButton = document.getElementById('searchButton');
let _img = document.getElementById('img_result');

  
/* 星座名を指定して検索 */
function butotnClick() {
    let sql = "SELECT * FROM CONSTELLATION WHERE NAME_JP ='" + keyText.value + "\';";
    execSqljs(sql);
}
  
/* イベント登録 */
searchButton.addEventListener('click', butotnClick);
