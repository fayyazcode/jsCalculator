const number1 = +prompt('Enter first number: ');
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = +prompt('Enter second number: ');

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
alert("Your Answer is : "+result)