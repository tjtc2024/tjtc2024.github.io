
const div = document.getElementById('conv_json');

// 写真情報
const loadObj =
    (url) => fetch(url)
        .then((response) => { return response.json(); })
        .then((result) => {

        })
        .catch((e) => {})

