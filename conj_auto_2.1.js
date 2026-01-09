console.log("Verrification du code JS...");

const voyelles = "aáâàāeéêèēiíîìīoóôòōuúûùū";
const consonnes = "bcdfghjklmnpqrstvwxyzɓɗɦʣʤ";
const points = '.?!,;/';

let ficher_sons = cylabes(voyelles, consonnes).concat([...consonnes]);

let pps = 6
const pps_rat1 = ["ni", "ɦu", "ɦa", "ri", "mu", "wa", "yi", "li", "xi", "wu", "zi", "ya", "vu"];
const pps_cat1 = ["na", "wa", "ɦa", "ra", "mwa", "wa", "ya", "la", "xa", "wa", "za", "ya", "vwa"];
const pps_cnt1 = ["ca", "kwa", "ka", "kara", "kamwa", "kawa", "kaya", "kala", "kaxa", "kawa", "kaza", "kaya", "kavwa"];
const pps_rat2 = ["ci", "ɦu", "ɦa", "ri", "mu", "wa", "yi", "li", "xi", "wu", "zi", "ya", "vu"];
const pps_cat2 = ["ca", "wa", "ɦa", "ra", "mwa", "wa", "ya", "la", "xa", "wa", "za", "ya", "vwa"];
const pps_cat3 = ["no", "wo", "wo", "ro", "mo", "wo", "yo", "lo", "xo", "wo", "zo", "yo", "vo"];
const pps_rnt1 = ["ci", "ku", "ka", "kari", "kamu", "kawa", "kayi", "kali", "kaxi", "kawu", "kazi", "kaya", "kavu"];

const itc_pas = "ko";
const itc_pre = "si";
const itc_fut = "co";
const itc_co1 = "hi";
const itc_co2 = "mo";
const itc_imp = "na";
const v1 = ["la", "mba"];
const v2 = [];
const v3 = ["fa"];
const v4 = ["kiya", "kura", "ziya", "va", "puha", "juwa"];


// Fonction pour générer des syllabes à partir des consonnes et voyelles
function cylabes(voy, cons) {
    let cylabe = '';
    let cyl = [];
    for (let e of cons) {
        for (let f of voy) {
            cylabe += e;
            cylabe += f;
            cyl.push(cylabe);
            cylabe = ''; // Réinitialiser pour la prochaine syllabe
        }
    }
    return cyl;
}
function cylabe(phr) {
    let pl = 0;
    let cyla = [];
    while (pl < phr.length) {
        let e = phr[pl];
        let cyl = '';
        if (consonnes.includes(e)) {
            if (pl + 1 < phr.length && voyelles.includes(phr[pl + 1])) {
                cyl += e;
                cyl += phr[pl + 1];
                pl++; // Passer à la voyelle suivante dans la phrase
            } else if (pl + 1 < phr.length && consonnes.includes(phr[pl + 1])) {
                cyl += e;
            }
            cyla.push(cyl);
        } else if (points.includes(e)) {
            cyla.push(e);
        }
        
        pl++; // Passer au prochain caractère
    }
    return cyla;
}
function nombre_voyelle(mot) {
    a = 0;
    for (let letr of mot) {
        if (voyelles.includes(letr)) {
            a++;
        }
    }
    return a;
}
function premiere_voyelle(mot) {
    a = 0;
    for (let e = mot.length; e >= 0; e--) {
        if (voyelles.includes(mot[e])) {
            a = e;
        }
    }
    return a;
}
function adapt_v2(verbe) {
    // La dernière voyelle est remplacée par "e"
    let a = verbe; // Par défaut, renvoyer le verbe non modifié
    if (verbe[verbe.length-1] == "a") {
        a = verbe.slice(0,-1) + "e"; // La dernière voyelle est remplacée par "e"
    }
    return a;
}
function adapt_v3(verbe) {
    let a = verbe; // Par défaut, renvoyer le verbe non modifié
    if (v1.includes(verbe)) {
        a = verbe.slice(0,-1) + "i"; // La dernière voyelle est remplacée par "i"
    } else if (v2.includes(verbe)) {
        a = verbe.slice(0,-1) + "o"; // La dernière voyelle est remplacée par "o"
    } else if (v3.includes(verbe)) {
        a = verbe.slice(0,-1) + "u"; // La dernière voyelle est remplacée par "u"
    } else if (v4.includes(verbe)) {
        a = verbe.slice(0,-1) + "a"; // La dernière voyelle est remplacée par "u"
    } else if (nombre_voyelle(verbe) == 2) {
        if (verbe[verbe.length-1] == "a") {
            a = a.slice(0,-1) + a[premiere_voyelle(a)];
        }
    }
    return a;
}
function adapt_vd(verbe) {
    verbe += "wo"
    return verbe
}

function pass_par_nor_aff(verbe) {
    if (verbe != "kana") {
        var z = document.createElement("h2");
        z.textContent = "Passé Parfait Normal Affirmatif";
        document.querySelector("#Texte").appendChild(z);
        for (e = 0; e < pps; e++) {
            var a = "";
            a += pps_rat2[e] + " ";
            a += adapt_v3(verbe);
            var b = document.createElement("p");
            b.textContent = a;
            document.querySelector("#Texte").appendChild(b);
        }
    }
}
function pass_par_nor_neg(verbe) {
    if (verbe != "kana") {
        var z = document.createElement("h2");
    z.textContent = "Passé Parfait Normal Negatif";
        document.querySelector("#Texte").appendChild(z);
        for (e = 0; e < pps; e++) {
            var a = "";
            a += pps_cnt1[e] + " ";
            a += verbe;
            var b = document.createElement("p");
            b.textContent = a;
            document.querySelector("#Texte").appendChild(b);
        }
    }
}
function pass_par_par_aff(verbe) {
    if (verbe != "kana") {
        var z = document.createElement("h2");
        z.textContent = "Passé Parfait Participe Affirmatif";
        document.querySelector("#Texte").appendChild(z);
        for (e = 0; e < pps; e++) {
            var a = "";
            a += pps_cat1[e] + " ";
            a += verbe;
            var b = document.createElement("p");
            b.textContent = a;
            document.querySelector("#Texte").appendChild(b);
        }
    }
}
function pass_par_par_neg(verbe) {
    if (verbe != "kana") {
        var z = document.createElement("h2");
        z.textContent = "Passé Parfait Participe Negatif";
        document.querySelector("#Texte").appendChild(z);
        for (e = 0; e < pps; e++) {
            var a = "";
            a += pps_cnt1[e] + " ";
            a += verbe;
            var b = document.createElement("p");
            b.textContent = a;
            document.querySelector("#Texte").appendChild(b);
        }
    }
}
function pass_imp_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Imparfait Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_pas + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_imp_nor_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Imparfait Normal Negatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cnt1[e] + " ";
        a += itc_pas + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_imp_par_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Imparfait Participe Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_pas + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_imp_par_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Imparfait Participe Negatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cnt1[e] + " ";
        a += itc_pas + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_con_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Conditionnel Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_pas + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_con_nor_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Conditionnel Normal Negatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cnt1[e] + " ";
        a += itc_pas + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_con_par_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Conditionnel Participe Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_pas + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pass_con_par_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Passé Conditionnel Participe Negatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cnt1[e] + " ";
        a += itc_pas + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_par_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Parfait Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (verbe == "kana") {
            a += pps_rat2[e] + " ";
            a += "na";
        }
        else if (verbe == "ka") {
            a += pps_cat2[e] + " ";
        }
        else {
            a += pps_rat1[e] + " ";
            a += itc_pre + " ";
            a += verbe;
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_par_nor_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Parfait Normal Négatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (verbe == "kana") {
            a += pps_rnt1[e] + " ";
            a += itc_pre + " ";
            a += "na";
        }
        else if (verbe == "ka") {
            a += pps_rnt1[e] + " ";
            a += itc_pre;
        }
        else {
            a += pps_rnt1[e] + " ";
            a += itc_pre + " ";
            a += verbe;
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_par_par_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Parfait Participe Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (verbe == "kana") {
            a += pps_rat1[e] + " ";
            a += adapt_vd("lona");
        }
        else {
            a += pps_rat1[e] + " ";
            a += adapt_vd(verbe);
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_par_par_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Parfait Participe Négatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (verbe == "kana") {
            a += pps_rnt1[e] + " ";
            a += itc_pre + " ";
            a += "na";
        }
        else {
            a += pps_rnt1[e] + " ";
            a += itc_pre + " ";
            a += verbe;
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_imp_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Imparfait Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat3[e] + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_imp_nor_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Imparfait Normal Négatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (verbe == "juwa") {
            a += pps_rnt1[e] + " ";
            a += "ji";
        }
        else {
            a += pps_rnt1[e] + " ";
            a += adapt_v3(verbe);
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_imp_par_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Imparfait Participe Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rat1[e] + " ";
        a += adapt_vd(verbe);
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_imp_par_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Imparfait Participe Négatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (verbe == "juwa") {
            a += pps_rnt1[e] + " ";
            a += "ji";
        }
        else {
        a += pps_rnt1[e] + " ";
        a += adapt_v3(verbe);
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_con_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Conditionnel Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_con_nor_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Conditionnel Normal Negatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cnt1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_con_par_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Conditionnel Participe Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function pres_con_par_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Présent Conditionnel Participe Negatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cnt1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function futu_par_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Futur Parfait Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rat1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function futu_par_nor_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Futur Parfait Normal Négatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rnt1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function futu_par_par_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Futur Parfait Participe Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rat1[e] + " ";
        a += itc_fut + " ";
        a += adapt_vd(verbe);
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function futu_par_par_neg(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Futur Parfait Participe Négatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rnt1[e] + " ";
        a += itc_fut + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function cont_par_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Contextuel Parfait Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += itc_co1 + " ";
        a += itc_co2 + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function subj_par_aff1(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Subjonctif Parfait Affirmatif Forme 1";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rat1[e] + " ";
        a += adapt_v2(verbe);
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function subj_par_aff2(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Subjonctif Parfait Affirmatif Forme 2";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += adapt_v2(verbe);
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function subj_par_neg1(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Subjonctif Parfait Négatif Forme 1";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rnt1[e] + " ";
        a += itc_pre + " ";
        a += adapt_v2(verbe);
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function subj_par_neg2(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Subjonctif Parfait Negatif Forme 2";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_cat1[e] + " ";
        a += verbe;
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function impe_par_nor_aff(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Impératif Parfait Normal Affirmatif";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (e == 1) {
            if (verbe == "ja") {
                a += "ko";
            }
        else {
            a += verbe;
            }
        }
        else if (e == 2) {
            a += itc_imp + " ";
            a += adapt_v2(verbe);
        }
        else {
            a += itc_imp + " ";
            a += pps_rat1[e] + " ";
            a += adapt_v2(verbe);
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function impe_par_nor_neg1(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Impératif Parfait Normal Négatif Forme 1";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        if (e == 0) {
            a += itc_imp + " ";
            a += pps_rat1[e] + " ";
            a += itc_pre + " ";
            a += adapt_v2(verbe);
        }
        else {
            a += pps_rnt1[e] + " ";
            a += itc_pre + " ";
            a += adapt_v2(verbe);
        }
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function impe_par_nor_neg2(verbe) {
    var z = document.createElement("h2");
    z.textContent = "Impératif Parfait Normal Négatif Forme 2";
    document.querySelector("#Texte").appendChild(z);
    for (e = 0; e < pps; e++) {
        var a = "";
        a += pps_rnt1[e] + " ";
        a += itc_pre + " ";
        a += adapt_v2(verbe);
        var b = document.createElement("p");
        b.textContent = a;
        document.querySelector("#Texte").appendChild(b);
    }
}
function conjug() {
    const verbe = document.querySelector('input').value;
    if (verbe !== "") {
        console.log("Conjugaison en cours...");
        var d = document.createElement("h1");
        d.textContent = 'Conjugaisons du verbe "hu '+verbe+'"';
        document.querySelector("#Texte").appendChild(d);
        const a = [
            pass_par_nor_aff(verbe),
            pass_par_nor_neg(verbe),
            pass_par_par_aff(verbe),
            pass_par_par_neg(verbe),
            pass_imp_nor_aff(verbe),
            pass_imp_nor_neg(verbe),
            pass_imp_par_aff(verbe),
            pass_imp_par_neg(verbe),
            pass_con_nor_aff(verbe),
            pass_con_nor_neg(verbe),
            pass_con_par_aff(verbe),
            pass_con_par_neg(verbe),
            pres_par_nor_aff(verbe),
            pres_par_nor_neg(verbe),
            pres_par_par_aff(verbe),
            pres_par_par_neg(verbe),
            pres_imp_nor_aff(verbe),
            pres_imp_nor_neg(verbe),
            pres_imp_par_aff(verbe),
            pres_imp_par_neg(verbe),
            pres_con_nor_aff(verbe),
            pres_con_nor_neg(verbe),
            pres_con_par_aff(verbe),
            pres_con_par_neg(verbe),
            futu_par_nor_aff(verbe),
            futu_par_nor_neg(verbe),
            futu_par_par_aff(verbe),
            futu_par_par_neg(verbe),
            cont_par_nor_aff(verbe),
            subj_par_aff1(verbe),
            subj_par_aff2(verbe),
            subj_par_neg1(verbe),
            subj_par_neg2(verbe),
            impe_par_nor_aff(verbe),
            impe_par_nor_neg1(verbe),
            impe_par_nor_neg2(verbe)
        ];
        for (let e of a) {
            var b = document.createElement("p");
            b.textContent = e;
            document.querySelector("#Texte").appendChild(b);
        }
        console.log('Conjugaison effectuée pour le verbe "hu '+verbe+'" !');
        document.querySelector('input').value = null;
        var c = document.createElement("div");
        c.textContent = "";
        document.querySelector("#Texte").appendChild(c);
    }
    
    localStorage.setItem('log',
        `
            ${localStorage.getItem('log')} <br><u>
            ${new Date().getDate()}
            ${new Date().getMonth()}
            ${new Date().getFullYear()}
            ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</u> :
            Conjugaison effectuée pour le verbe <b>hu ${verbe}</b> par <i>conju_auto_2.1.js</i>
        `
    );
}
function change_pps() {
    if (pps == 6) {
        pps = 13;
        console.log("Les conjugaisons des objets sont activés !");
    }
    else if (pps == 13) {
        pps = 6;
        console.log("Les conjugaisons des objets sont désactivés !");
    }
}
console.log("Écrivez un verbe en verssion Z écrite du Shimaoré !")