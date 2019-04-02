// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

//supprimer dernier élément tableau :
var last = secretMessage.pop();

//ajouter élément à la fin du tableau :
var newLength = secretMessage.push('to', 'program');

//remplacer 'easily par right (acceder au bon index)
secretMessage.splice(6, 1, 'right');

//supprimer le premier élément tableau
var first = secretMessage.shift();

//ajouter un élément au début du tableau
var newLength = secretMessage.unshift('Programming');

//remplacer plusieurs éléments d'un tableau
secretMessage.splice(5, 5, 'know');

//méthode join pour afficher le msg secret à la console
console.log(secretMessage.join());

console.log(secretMessage);