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
var h = 180*gain + 20;;
var offset = 0;

/*
let inputText = document.getElementById('key');
let searchButton = document.getElementById('search');
let offsetButton = document.getElementById('offset');
let resetButton = document.getAnimations('reset');
*/

/* 星座名を指定して検索 */
function searchPressed(){
  const key = inputText.value();
  //let sql = "SELECT * FROM ORIGIN INNER JOIN APPENDIX ON ORIGIN.IAU_NAME = APPENDIX.IAU_NAME INNER JOIN CONS ON ORIGIN.CON_SHORT = CONS.CON_SHORT WHERE CONS.CON_JA ='" + key + "\';";
  let sql = "SELECT * FROM STARS INNER JOIN CODES ON STARS.HIP = CODES.HIP INNER JOIN CONS ON CODES.CON_SHORT = CONS.CON_SHORT WHERE CONS.CON_JA ='" + key + "' ORDER BY STARS.VMAG DESC;";
  execSqljs(sql);
}

function offsetPressed() {
  offset += 30;
  if (offset >= 360) {
    offset = offset % 360;
  }
}

function resetPressed() {
  offset = 0;
  rows = [];
}

// 初期化
function setup() {
  

  titleP = createP('星座');

  inputText = createInput('オリオン');
  inputText.position(60,10);

  searchButton = createButton('検索');
  searchButton.mousePressed(searchPressed);  //
  searchButton.position(180,10);

  offsetButton = createButton('◀'); //
  offsetButton.mousePressed(offsetPressed);
  offsetButton.position(230,10);

  resetButton = createButton('リセット'); //
  resetButton.mousePressed(resetPressed);
  resetButton.position(260,10);

  createCanvas(w, h);
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
    b = 255;
    r = 4;
  }
  else if (1.5 <= vmag && vmag < 2.5) {
    b = 200;
    r = 4;
  }
  else if (2.5 <= vmag && vmag < 3.5) {
    b = 200;
    r = 3;
  }
  else if (3.5 <= vmag && vmag < 4.5) {
    b = 200;
    r = 2;
  }
  else {
    b = 128;
    r = 2;
  }

  return [b,r];
}

// 星をプロット
function plotrow(row) {
  const vlevel = getVmagLevel(parseFloat(row.VMAG));
  const ra_value = (parseInt(row.RA_DEG) + offset) % 360; 
  const dec_deg = (90 - parseInt(row.DEC_DEG))*gain + 10;
  const dec_rad = parseFloat(row.DEC_DEG)*Math.PI / 180.0;
  const ra_deg = ((180 - ra_value)* Math.cos(dec_rad) +180)*gain
  //const dec_rad = (parseInt(row.DEC_DEG))*Math.PI / 180.0;
  //const ra_pos = (ra_deg * Math.cos(dec_rad) + 180)*gain;

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

//new p5(sketch, "container");
