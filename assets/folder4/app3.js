var number1 = +prompt("Enter your first Number");
var number2 = +prompt("Enter your second Number");
var number3 = +prompt("Ente your third");

var smallestNumber = (number1);
if (number2 < smallestNumber) {
    smallestNumber = number2;
}
else if (number3 < smallestNumber) {
    smallestNumber = number3;
}
document.write("The smallest number is " + smallestNumber);

