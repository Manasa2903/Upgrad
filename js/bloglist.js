// Get the modal
var modal = document.getElementsByClassName("modal")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName("fa fa-trash")[0];
var btn1 = document.getElementsByClassName("fa fa-trash")[1];
var btn2 = document.getElementsByClassName("fa fa-trash")[2];
var btn3 = document.getElementsByClassName("fa fa-trash")[3];
var btn4 = document.getElementsByClassName("fa fa-trash")[4];
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function remove()
{
  modal.style.display = "none";
}