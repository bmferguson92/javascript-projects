let num = 123.45;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let text = num.toString(); {
    console.log(text);
} 
console.log(text.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (num.toString().includes (".")) {
    console.log(num.toString().length -1);
} else {
    console.log(num.toString().length);
}