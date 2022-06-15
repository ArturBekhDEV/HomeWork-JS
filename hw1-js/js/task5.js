let askAge = prompt("What is your age?");
let promptWindow = confirm("Your age is " + askAge + " years?");

if (askAge < 18) {
  alert("You are too small");
} else {
  alert("You are good enough");
}
