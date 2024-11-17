var sketch;
let rows = [];

/* SQL */
async function execSqljs(sql) {
  const sqlPromise = initSqlJs({
      locateFile:file=>`https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`
  });
  
  const dataPromise = fetch("stars.db").then(res => res.arrayBuffer());
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
  const db = new SQL.Database(new Uint8Array(buf));

  const stmt = db.prepare(sql);
  //rows = [];
  while( stmt.step() ) {
      let row = stmt.getAsObject();
      rows.push(row);
  }

  stmt.free();
  db.close();
}


// 天球マップ
var gain = 5;
var w = 360*gain;
var h = 180*gain;
var offset = 0;

let inputText;
let searchButton;


/* 星座名を指定して検索 */
function searchPressed(){
  const key = inputText.value();
  let sql = "SELECT * FROM ORIGIN INNER JOIN APPENDIX ON ORIGIN.IAU_NAME = APPENDIX.IAU_NAME INNER JOIN CONS ON ORIGIN.CON_SHORT = CONS.CON_SHORT WHERE CONS.CON_JA ='" + key + "\';";
  execSqljs(sql);
}

function offsetPressed() {
  offset += 30;
}

function resetPressed() {
  offset = 0;
  rows = [];
}

// 初期化
function setup() {
  createCanvas(w, h);

  inputText = createInput('オリオン');  //
  inputText.position(75,10);


  searchButton = createButton('検索');      // 
  searchButton.mousePressed(searchPressed);  //
  searchButton.position(250,10);

  offsetButton = createButton('◀'); //
  offsetButton.mousePressed(offsetPressed);
  offsetButton.position(300,10);

  resetButton = createButton('リセット'); //
  resetButton.mousePressed(resetPressed);
  resetButton.position(350,10);

  background(0);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // 上限は除き、下限は含む
}


function getVmagLevel(vmag) {
  var b = 128;
  var r = 2;

  if (vmag < 1.5) {
    b = getRandomInt(240,250);
    r = 4;
  }
  else if (1.5 <= vmag && vmag < 2.5) {
    b = getRandomInt(200,240);
    r = 3;
  }
  else if (2.5 <= vmag && vmag < 3.5) {
    b = getRandomInt(160,200);
    r = 2;
  }
  else {
    b = getRandomInt(128,160);
    r = 2;
  }

  return [b,r];
}

// 星をプロット
function plotrow(row) {
  const vlevel = getVmagLevel(parseFloat(row.VMAG));
  const ra_value = (parseInt(row.RA_J2000) + offset) % 360; 
  const ra_deg = w - parseInt(ra_value)*gain;
  const dec_deg = h/2 - parseInt(row.DEC_J2000)*gain;

  if (0 <= ra_deg && ra_deg <= w && 0 <= dec_deg && dec_deg <= h) {
    fill(vlevel[0]);
    circle(ra_deg,dec_deg,vlevel[1]);
  }
}

function draw() {
  background(0);
  const rows_out = rows;
  rows_out.forEach( row => { plotrow(row); });
}

new p5(sketch, "container");
