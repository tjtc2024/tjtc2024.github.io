
const div = document.getElementById('conv_json');

const loadHtml = (jsonObj) => {
    
    let htmlBody = "<h2>" + jsonObj.title + "</h2>";
    const sections = jsonObj.sections;

    for (let n = 0; n < sections.length; n++) {
        if (sections[n].img) {
            htmlBody += "<p><img src=\"" + sections[n].img + "\"></p>";
        }

        const lines = sections[n].lines
        for (let m = 0; m < lines.length; m++) {
            htmlBody += "<p>" + lines[m]+ "</p>";
        }
    }
    div.innerHTML = htmlBody;
} 


const loadObj =
    (url) => fetch(url)
        .then((response) => { return response.json(); })
        .then((result) => {loadHtml(result);})
        .catch((e) => {})


// ここにファイル名を指定
loadObj('slide.json');