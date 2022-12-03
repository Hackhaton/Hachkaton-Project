// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("Clickable");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let append;
$(habit).click(function (e) { 
  e.preventDefault();
  append = `#Habits`

});

$(daily).click(function (e) { 
  e.preventDefault();
  append = `#Dailies`

});




$(addtodo).click(function (e) { 
  e.preventDefault();
  $(append).append(`        <div class="Todo_item">
  <div class="Add_button">
    <div class="plus_box">
      <img class="Cross" src="img/X.svg" alt="">
    </div>

  </div>
  <div class="center_content">
    <p class="description">Drink Water</p>

  </div>
  <div class="minus_button">
    <div class="minus_box">
      <img class="minus" src="img/minus.svg" alt="">
    </div>
  </div>

</div>`);
  
});