let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good afternoon!";
} else if (hourNow > 5) {
  greeting = "Good morning!";
} else if (hourNow > 0) {
  greeting = "Hello!";
} else {
  greeting = "Hello!";
}

document.getElementById("greetings").innerHTML = `<h1> ${greeting}</h1>`;

// For hover touch elements
document.addEventListener("touchstart", function () {}, true);
