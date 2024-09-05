function checkAge(name, age) {
  // your code her
  if(age < 21) return `Go home, ${name}!`;
  else return `Welcome, ${name}!`

}
let output = checkAge('Adrian', 22);
console.log(output);