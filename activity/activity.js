const queryString = location.search;
const params = new URLSearchParams(queryString);
const year = params.get("year");

let jsonFileName = "./slide.js";

if (year == "2024") {
    jsonFileName = "./activity_2024.json";
}

// ここにファイル名を指定
loadObj(jsonFileName);