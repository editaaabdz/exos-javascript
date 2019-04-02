// you can write js here
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');

//exos 1.2 : de Kelvin à Celsius
var Kelvin = 294;
var Celsius = Kelvin - 273;
console.log(Celsius);

//Fahrenheit à Celsius / méthode .floor()
var Fahrenheit = Math.floor(Celsius * (9 / 5) + 32);
// je déclare une valiable Fahrenheit et utilise la méthode .floor() en mettant le calcule
//à l'intérieur pour convertir en celsius et arrondir à l'entier inférieur
console.log(Fahrenheit); //j'affiche fahrenheit