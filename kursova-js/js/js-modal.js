var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let content = document.querySelector(".p-content");
let contentSecond = document.querySelector(".a-content");
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  console.log((content.textContent = "My name is Artur"));
  console.log((contentSecond.textContent = "And im still 28 years"));
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
