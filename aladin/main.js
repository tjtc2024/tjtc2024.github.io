let reqtext = document.getElementById('reqtext');
let aladin;

A.init.then(() => {
    aladin = A.aladin('#aladin-lite-div', {fov:1, target: 'M31', showReticle:false });
});


function clickBtnSel() {
    let targetName = reqtext.value;
    aladin = A.aladin('#aladin-lite-div', {fov:1, target: targetName, showReticle:false});
}

