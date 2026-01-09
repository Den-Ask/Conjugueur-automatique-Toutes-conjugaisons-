let couleura = document.getElementById("change_couleur");
if (couleura !== null) {
	couleura.addEventListener("click", change_couleur);
	couleura.innerText = "O";
}
let couleure = document.getElementById("couleur");
if (couleure !== null) {
	couleure.addEventListener("click", couleur);
	couleure.innerText = "O";
}
let couleuri = document.getElementById("change");
if (couleuri !== null) {
	couleuri.addEventListener("click", change);
	couleuri.innerText = "O";
}
let couleuro = document.getElementById("couleur_change");
if (couleuro !== null) {
	couleuro.addEventListener("click", couleur_change);
	couleuro.innerText = "O";
}
let traduir_en = document.getElementById("traduir_en");
if (traduir_en !== null) {
	traduir_en.addEventListener("click", traduir);
	traduir_en.innerText = "tra";
}
let traduir_du = document.getElementById("traduir_du");
if (traduir_du !== null) {
	traduir_du.addEventListener("click", traduir);
	traduir_du.innerText = "tra";
}
let netoie = document.getElementById("netoyer");
if (netoie !== null) {
	netoie.addEventListener("click", netoyer);
	netoie.innerText = "net";
}
let conjuguer = document.getElementById("conjuguer");
if (conjuguer !== null) {
	conjuguer.addEventListener("click", conjug);
	conjuguer.innerText = "con";
}
let cha_pps = document.getElementById("change_pps");
if (cha_pps !== null) {
	cha_pps.addEventListener("click", change_pps);
	cha_pps.innerText = "obj";
}
document.querySelector("input").addEventListener("keydown", function (event) {
    const verbe = document.querySelector('input').value;
	if (event.key === "Enter" && verbe) {
		document.querySelector("input").style.display = "none";
		document.querySelector(`#${lid[eur]}`).style.display = "none";
		document.querySelector("#Éffacer").style.display = "inline";
		conjug();
	}
});
document.querySelector("#Éffacer").addEventListener("click", star);
function star (event) {
	document.querySelector("input").style.display = "inline";
	document.querySelector(`#${lid[eur]}`).style.display = "inline"
	document.querySelector("#Éffacer").style.display = "none";
	document.querySelector("#Texte").innerHTML = "";
};
var lid = ["Objets", "ObjetsA"]
var eur = 0
var obj = document.getElementById(lid[eur]);
obj.addEventListener("click", function (event) {
	if (obj.getAttribute("id") === "Objets") {
		obj.setAttribute("id", "ObjetsA");
		eur = 1;
	}
	else {
		obj.setAttribute("id", "Objets");
		eur = 0;
	}
});
function informations1 () {
	window.open('info1.html', '_blank')
}
console.log("La verrification du code JS est complette.");