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

$(todoes).click(function (e) { 
  e.preventDefault();
  append = `#Todo`

});






$(addtodo).click(function (e) { 
  let todoname = $(saxel).val();
  let descr = $(desc).val();
  $(desc).val("");
  $(saxel).val("");
  e.preventDefault();
  $(append).append(`        <div class="Todo_item">
  <div class="Add_button">
    <div id="damateba" class="plus_box">
      <img class="Cross" src="img/X.svg" alt="">
    </div>

  </div>
  <div class="center_content">
    <p class="description">${todoname}</p>
    <p class="patara">${descr}</p>
  </div>
  <div class="minus_button">
    <div id="washla" class="minus_box">
      <img  class="minus" src="img/minus.svg" alt="">
    </div>
  </div>

</div>`);

$(washla).click(function (e) { 
  e.preventDefault();

  $(this).closest(".Todo_item").remove();
  
});
let gemnum = 0;

$(damateba).click(function (e) { 
  e.preventDefault();
  gemnum += 0.34;
  $(Gem1).html(Math.round(gemnum * 100) / 100);
});
  
});

