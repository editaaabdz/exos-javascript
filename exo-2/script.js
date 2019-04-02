// you can write js here
console.log('exo-2');

//var booléan de type true ou false
var CoureurInscritOuPas = false;
var age = 16;
var majeur = age >= 18;
var mineur = age <= 17;
var raceNumber = Math.floor(Math.random() * 1000);

if (CoureurInscritOuPas === true) {
    console.log('Vous êtes déjà inscrit');
} else {
    CoureurInscritOuPas + raceNumber;
}
console.log(raceNumber);

if (CoureurInscritOuPas === true && majeur === true) {
    console.log('You will race at 9:30 am');
} else if (CoureurInscritOuPas === true || majeur === true) {
    CoureurInscritOuPas + raceNumber;
    console.log('You will race at 11:00 am');
    console.log(raceNumber);
} else if (CoureurInscritOuPas === false && mineur === true) {
    CoureurInscritOuPas + raceNumber;
    console.log('You will race at 12:30 pm');
    console.log(raceNumber);
} else {
    console.log('Go to see the registration desk');
}