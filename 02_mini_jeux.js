/**L'ordinateur va choisir au hasard un nombre entre 1 et 10
 * 3 essais pour trouver le nombre mystere
 * Si bonne reponse >> message + reponse
 * Sinon message + reponse + proposition de rejouer 
 */

let justePrix = Math.floor(Math.random() * 10);

let reponses = [
    2,
    5,
    7,
];

for (let i = 0; i < 3; i++) {
    if (justePrix === reponses[i]) {
        console.log(`Bravo, la reponse est ${justePrix}`)
        break;
    }
    else {
        console.log("try again")
    }
};

