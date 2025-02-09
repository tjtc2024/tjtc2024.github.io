
const div = document.getElementById('conv_json');

const loadHtml = (jsonObj) => {
    
    let htmlBody = "<h2>" + jsonObj.title + "</h2>";
    //htmlBody += JSON.stringify(jsonObj.sections);
    const sections = jsonObj.sections;
    //htmlBody += JSON.stringify(sections[0]);
    //htmlBody += JSON.stringify(sections[0].lines);

    //htmlBody += JSON.stringify(sections[0].lines[0].line);
    //htmlBody += "<p>" + sections[0].lines[0].line + "</p>";

    for (let n = 0; n < sections.length; n++) {
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