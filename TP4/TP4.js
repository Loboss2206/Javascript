// Exercice 1

// 1.1 - Création d'un objet littéral
/*
const personne = {
    nom : "Brunet",
    prenom : "Logan",
    age : 18,
    taille : 186
  };
  */

const personne = {};
personne.prenom = "Logan";
personne.nom = "Brunet";
personne.age = 18;
personne.taille = 186;

const x = personne;
x.age = 31;
console.log(personne.age);
// Cela change la valeur des champs de personne aussi


// 1.2 - Accès aux propriétés d'un objet
console.log(personne.nom);
console.log(personne["prenom"]);
console.log(Object.getOwnPropertyDescriptor(personne, "age").value);

for (let champ in personne) {
    console.log(champ + ": " + personne[champ]);
}

personne.poids = 70;
delete personne.poids;


// 1.3 - Objets	imbriqués (nested en anglais)
personne.sports = {
    sport1: "volleyball",
    sport2: "football",
    sport3: "basketball"
};

console.log(personne.sports.sport1);
console.log(personne.sports.sport2);
console.log(personne.sports.sport3);

for (let sport in personne.sports) {
    console.log(sport + ": " + personne.sports[sport]);
}

personne.sports = [
    { nom: "Tennis", equipements: ["raquette", "balle", "filet"] },
    { nom: "Football", equipements: ["ballon", "but"] },
    { nom: "Basketball", equipements: ["ballon", "panier"] }
];

for (let i in personne.sports) {
    console.log(personne.sports[i].nom + " - " + personne.sports[i].equipements);
}


// 1.4 - Les méthodes
personne.qui = function () {
    console.log("Je m'appelle " + this.prenom + " " + this.nom);
};

personne.quimaj = function () {
    console.log((this.prenom + " " + this.nom).toUpperCase());
};


// 1.5 - Affichage
const div = document.createElement("div");
div.textContent = Object.values(personne);
document.body.appendChild(div);

const div2 = document.createElement("div");
div2.textContent = JSON.stringify(personne);
document.body.appendChild(div2);

personne.datenaissance = new Date(2004, 6, 22);
const div3 = document.createElement("div");
div3.textContent = JSON.stringify(personne.datenaissance);
document.body.appendChild(div3);

function age() {
    const today = new Date();
    const birthDate = new Date(personne.datenaissance);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

personne.age = age();

const div4 = document.createElement("div");
div4.textContent = JSON.stringify(personne.age);
document.body.appendChild(div4);



// Exercice 2

// 2.1 - Mise	en	place	de	setter	et	de	getter
const personne2 = {
    nom: "Brunet",
    prenom: "Logan",
    age: 18,
    taille: 186,
    langue: "français",
    get lang() {
        return this.langue;
    },
    set lang(langue) {
        this.langue = langue;
    }
};

/* La différence entre le champ "get fullName() {...}" et 
"fullName: function() {...}" est que le premier est un getter 
défini comme une propriété de l'objet "personne", tandis que le 
second est une méthode qui est également définie comme une 
propriété de l'objet "personne". Le getter est appelé 
automatiquement lorsque la propriété est accédée, alors que 
la méthode doit être appelée explicitement.*/

const obj = {
    counter: 0
};

Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    }
});

Object.defineProperty(obj, "inc", {
    get: function () {
        this.counter++;
    }
});

Object.defineProperty(obj, "dec", {
    get: function () {
        this.counter--;
    }
});

Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, "subs", {
    set: function (value) {
        this.counter -= value;
    }
});


// 2.2 - Les constructeurs

function Personne(nom, prenom, age, couleurDesYeux) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.couleurDesYeux = couleurDesYeux;
    this.name = function () {
        console.log(this.nom + " " + this.prenom);
    };
    this.changeName = function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    };
}

let pere = new Personne("Dupont", "Jean", 50, "marron");
let mere = new Personne("Dupont", "Marie", 45, "bleu");

let x1 = "Hello";
console.log(x1.length); // 5

let x2 = 123;
console.log(x2.toString()); // "123"

let x3 = true;
console.log(x3.valueOf()); // true

let x4 = {};
x4.prop1 = "value1";
console.log(x4.prop1); // "value1"

let x5 = [];
x5.push("value1");
console.log(x5.length); // 1

let x6 = /ab+c/;
console.log(x6.test("abbbc")); // true

let x7 = function () {
    console.log("Hello world!");
};
x7(); // "Hello world!"

let x8 = new Date();
console.log(x8.getFullYear()); // current year

console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.3)); // 5

// Exercice 3

// 3.1 - Tâche 1
function Personne(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.estomac = [];
}

Personne.prototype.manger = function (nourriture) {
    if (this.estomac.length < 10) {
        this.estomac.push(nourriture);
    } else {
        console.log("Impossible de manger plus, l'estomac est plein !");
    }
};

Personne.prototype.digestionOK = function () {
    this.estomac = [];
    console.log("L'estomac est vide !");
};

Personne.prototype.name = function () {
    console.log("Je m'appelle " + this.nom + " " + this.prenom);
};


// 3.2 - Tâche 2
function Car(modele, conso100km) {
    this.modele = modele;
    this.conso100km = conso100km;
    this.reservoirLitre = 0;
    this.compteurkm = 0;
}

Car.prototype.addfuel = function (nblt) {
    this.reservoirLitre += nblt;
    console.log(nblt + " litres de carburant ajoutés au réservoir !");
};

Car.prototype.drive = function (nbkm) {
    var conso = this.conso100km / 100 * nbkm;
    if (this.reservoirLitre >= conso) {
        this.reservoirLitre -= conso;
        this.compteurkm += nbkm;
        console.log(nbkm + " km parcourus !");
    } else {
        console.log("Je serai à cours de carburant dans " + Math.floor(this.reservoirLitre * 100 / this.conso100km) + " km");
        this.compteurkm += Math.floor(this.reservoirLitre / this.conso100km * 100);
        this.reservoirLitre = 0;
    }
};


// 3.3 - Tâche 3
function Baby(nom, prenom, jouetFavori) {
    Personne.call(this, nom, prenom);
    this.jouetFavori = jouetFavori;
}
Baby.prototype = Object.create(Personne.prototype);
Baby.prototype.constructor = Baby;

var monBebe = new Baby("Durand", "Sophie", "lapin");
