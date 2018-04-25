var input = parseInt(prompt("Please enter your number here:"));
if (input % 2 == 0) {
  input = input / 2;
}
else {
  input = input * 3 + 1;
}
console.log(input);
