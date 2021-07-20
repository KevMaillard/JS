
                                                            // Constantes caracteres
const numbers = "1234567890".split('');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const symb = "&#!?/%".split('');
                                                            // Choix aleatoire des caracteres
let dataSymb = "";
    for (let i = 0; i < 2; i++) {
        dataSymb += symb[Math.floor(Math.random() * symb.length)];
}
let dataNumb = "";
    for (let i = 0; i < 2; i++) {
        dataNumb += numbers[Math.floor(Math.random() * numbers.length)];
}
let dataLetters = "";
    for (let i = 0; i < 2; i++) {
        dataLetters += letters[Math.floor(Math.random() * letters.length)];
}
let dataLower = "";
    for (let i = 0; i < 2; i++) {
        dataLower += letters[Math.floor(Math.random() * letters.length)].toLowerCase();
}
                                                            // Concatenation des diff caracteres et appel MdP
let mdp = dataLetters.concat(dataNumb, dataSymb, dataLower);
console.log(mdp);