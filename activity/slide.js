
const div = document.getElementById('conv_json');

const loadHtml = (jsonObj) => {
    const sections = jsonObj.sections;

    let htmlBody = "";
    for (let n = 0; n < sections.length; n++) {
        if (sections[n].subtitle) {
            htmlBody += "<h3>" + sections[n].subtitle + "</h3>"
        }

        if (sections[n].img) {
            htmlBody += "<p><img src=\"" + sections[n].img + "\"></p>";
        }

        const lines = sections[n].lines
        //htmlBody += "<p>" + sections[n].lines[0].line + "</p>";
        for (let m = 0; m < lines.length; m++) {
            htmlBody += "<p>" + lines[m] + "</p>";
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