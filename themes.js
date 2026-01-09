const cssA = ["xMwr.css", "xMwr-.css"];
const cssB = ["tdc.css", "tdc-.css"];
const cssC = ["tdm.css", "tdm-.css"];
const cssD = ["tca.css", "tca-.css"];
const cssE = ["co_au.css", "co_au-.css"];

var liss = localStorage.getItem('theme');

if (liss === "true") {
    localStorage.setItem('TA', cssA[1]);
    localStorage.setItem('TB', cssB[1]);
    localStorage.setItem('TC', cssC[1]);
    localStorage.setItem('TD', cssD[1]);
    localStorage.setItem('TE', cssE[1]);
}
else if (liss === "false") {
    localStorage.setItem('TA', cssA[0]);
    localStorage.setItem('TB', cssB[0]);
    localStorage.setItem('TC', cssC[0]);
    localStorage.setItem('TD', cssD[0]);
    localStorage.setItem('TE', cssE[0]);
}

const link = document.getElementById('oui');
var lien = link.getAttribute('href');
if (liss !== null) {
    if (cssA.includes(lien)) {
        link.setAttribute('href', localStorage.getItem('TA'));
    }
    if (cssB.includes(lien)) {
        link.setAttribute('href', localStorage.getItem('TB'));
    }
    if (cssC.includes(lien)) {
        link.setAttribute('href', localStorage.getItem('TC'));
    }
    if (cssD.includes(lien)) {
        link.setAttribute('href', localStorage.getItem('TD'));
    }
    if (cssE.includes(lien)) {
        link.setAttribute('href', localStorage.getItem('TE'));
    }
}

function change_couleur() {
    if (link.getAttribute('href') === cssA[0]) {
        link.setAttribute('href', cssA[1]);
        console.log("Thème sombre activé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TA', lien);
        localStorage.setItem("theme", "true");
    } else {
        link.setAttribute('href', cssA[0]);
        console.log("Thème sombre désactivé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TA', lien);
        localStorage.setItem("theme", "false");
    }
}
function couleur() {
    if (link.getAttribute('href') === cssB[0]) {
        link.setAttribute('href', cssB[1]);
        console.log("Thème sombre activé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TB', lien);
        localStorage.setItem("theme", "true");
    } else {
        link.setAttribute('href', cssB[0]);
        console.log("Thème sombre désactivé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TB', lien);
        localStorage.setItem("theme", "false");
    }
}
function change() {
    if (link.getAttribute('href') === cssC[0]) {
        link.setAttribute('href', cssC[1]);
        console.log("Thème sombre activé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TC', lien);
        localStorage.setItem("theme", "true");
    } else {
        link.setAttribute('href', cssC[0]);
        console.log("Thème sombre désactivé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TC', lien);
        localStorage.setItem("theme", "false");
    }
}
function couleur_change() {
    if (link.getAttribute('href') === cssD[0]) {
        link.setAttribute('href', cssD[1]);
        console.log("Thème sombre activé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TD', lien);
        localStorage.setItem("theme", "true");
    } else {
        link.setAttribute('href', cssD[0]);
        console.log("Thème sombre désactivé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TD', lien);
        localStorage.setItem("theme", "false");
    }
}
function couleur_changeur() {
    if (link.getAttribute('href') === cssE[0]) {
        link.setAttribute('href', cssE[1]);
        console.log("Thème sombre activé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TE', lien);
        localStorage.setItem("theme", "true");
    } else {
        link.setAttribute('href', cssE[0]);
        console.log("Thème sombre désactivé !");
        lien = link.getAttribute("href");
        localStorage.setItem('TE', lien);
        localStorage.setItem("theme", "false");
    }
}