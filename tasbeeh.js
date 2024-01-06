// VARIABLES
// Variable for Buttons
let add = document.querySelector(".add");
let reset = document.querySelector(".reset")
let saved = document.querySelector(".save")
let tasbeeh = document.getElementById("tasbeeh");
let azkar = document.querySelector("#azkar");

// Variables For Saving Count
let count = document.getElementById("count");
let save = document.getElementById("saveEl");
let x = 0;
let y = 0;

// FOR ADD BUTTON
add.addEventListener('click', function () {
  x = x + 1;
  count.innerText = x;
})
//FOR REST BUTTON
reset.addEventListener("click", function () {
  x = 0;
  count.innerText = x;
})
//FOR SAVE BUTTON

saved.addEventListener("click", function () {
  y = count.innerHTML + "-";
  save.innerText = save.innerText + y;
  x = 0;
  count.innerText = x;
})

tasbeeh.addEventListener("click", function () {
  azkar.style.display = "block";
});

azkar.addEventListener("click", function () {
  azkar.style.display = "none";
}
)



