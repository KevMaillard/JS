// https://developer.mozilla.org/fr/docs/Web/JavaScript
/* Je peux ecrire du comm */
/**
 * https://jsdoc.app/
 */
console.log("Hello World !");
console.warn("Attention");
console.error("Ici il y a une erreur");

var variable1 = "Je suis une variable d'ancienne géneration et globale";
let age = 35;
const anneeDeNaissance = 1985;

console.log(variable1);
console.log(age);
console.log(anneeDeNaissance);

age = 40;
console.log(age);

/** Types de Variables 
 * String
 * Number
 * Boolean (True/False)
 * Object
 * Array
 * Null
 * Undefined
*/

let isAdmin = true;    /**Boolean */
let meteo = {           /**Object */
    temperature : 22,
    vent : "faible"
};
let apprenants = [      /**Array */
    "Kevin",
    "Lucas",
    "Alexis",
    "Soufiane",
    "Floriane",
    "Myriam",
    2021,
    ["Nicolas","Christophe"]
];

console.log(meteo);
console.table(apprenants);
console.table(apprenants[0]);
console.table(apprenants[5][1]);

console.log(meteo.temperature);

console.log("bonjour " + apprenants[2] + " aujourd'hui tu es en forme");
console.log(`Bonjour ${apprenants[2]} aujourd'hui tu es en forme`);
console.log(age + 1); /**Fonctionne pour tout type d'operation + modulo */

console.log(typeof age)

// if (age < 18) {
//     console.log("entree ko");
// }
// else {
//     console.log("entree ok");
// }

if (age <= 40 && age > 18) {
    console.log("T'es pas vieux et entree ok")
}

if (age === 40) {
    console.log("Bravo")
}

if (isAdmin) {
    console.log("bienvenue admin")
}

function direBonjour(prenom){
    console.log(`bonjour ${prenom}`)
}
direBonjour(apprenants[0]);
for(let i = 0; i<apprenants.length; i++){
    direBonjour(apprenants[i]);
}

apprenants.forEach(element => {
    console.log(element);
});