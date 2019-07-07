// Get the modal
var modal = document.getElementsByClassName("modal")[0];
var modal1 = document.getElementsByClassName("modal")[1];
var modal2 = document.getElementsByClassName("modal")[2];


// Get the button that opens the modal
var btn = document.getElementsByClassName("topButtons")[1];
var btn1 = document.getElementsByClassName("topButtons")[0];
var btn2 = document.getElementById("createPost");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal 

btn1.onclick = function() {
  modal1.style.display = "block";
}
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function(){
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function()
{
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
modal2.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
function remove()
{
  modal2.style.display = "none";
}
var show = document.getElementsByClassName("sign")[0];
show.onclick = function()
{
  modal1.style.display = "block";
  modal.style.display = "none";
}

  

