
let idx = 0;

const jsonList = [
    './activity_2024_04.json',
    './activity_2024_05.json',
    './activity_2024_06.json',
    './activity_2024_07.json',
    './activity_2024_08.json',
    './activity_2024_09.json',
    './activity_2024_10.json',
    './activity_2024_11.json',
    './activity_2024_12.json',
    './activity_2025_01.json',
    './activity_2025_02.json',
    './activity_2024_03.json'
];

const button_next = document.getElementById("next_page");
button_next.addEventListener('click', () => {
    if (idx < jsonList.length - 1) {
        idx++;
    }
    else {
        idx = 0;
    }

    loadObj(jsonList[idx]);
});

// initial
loadObj(jsonList[0]);
