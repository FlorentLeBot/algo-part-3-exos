/*
 * Pour chaque nombre compris entre min et max
 * Si le nombre est divisible par 3 => Fizz
 * Si le nombre est divisible par 5 =>  Buzz
 * Si le nombre est divisible par 3 et par 5 => FizzBuzz
 * Sinon retourner le nombre
 *
 * Voir le fichier de tests associé (spec/fizzBuzzSpec.js)
 */


function fizzBuzz(min, max) {

    let resultat = [];
    
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            return "FizzBuzz";
        } else if (i % 3 === 0) {
            return "Fizz";
        } else if (i % 5 === 0) {
            return "Buzz";
        } else {
            return i;
        }
    }
    resultat[i] = min(max[i]);
    return resultat;
}


export {
    fizzBuzz
};