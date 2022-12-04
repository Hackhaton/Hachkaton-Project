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
let count1 = 0;
$(habit).click(function (e) { 

  e.preventDefault();
  append = `#Habits`
  count1 +=1;
  $(datvla1).html(count1);

});
let count2 = 0;
$(daily).click(function (e) { 
 
  e.preventDefault();
  append = `#Dailies`
  count2 += 1;
  $(datvla2).html(count2);

});
let count3 = 0;
$(todoes).click(function (e) { 
  e.preventDefault();
  append = `#Todo`
  count3   += 1;
  $(datvla3).html(count3);

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
    <div class"ukan"><h1>-</h1></div>
    </div>
  </div>

</div>`);

let hp = 100
let line = 100;
$(washla).click(function (e) { 
  hp -= 5;
  line -= 5;
  $(hpbar).html(hp);
  $(hpbar).css("width", `${line}%`)

});
let gemnum = 0;

$(damateba).click(function (e) { 
  e.preventDefault();
  gemnum += 0.34;
  $(Gem1).html(Math.round(gemnum * 100) / 100);
});
  
});


const driver = new Driver();

driver.defineSteps([
    {
        element: "#profyuti",
        popover: {
            title: "This Is You!",
            description: `Here You can See Stats`,
            position: "right",
        }
    },
    {
      element: "#tutorgem",
      popover: {
          title: "This is Points You get",
          description: "You Can spend Them In the Shop",
          position: "left",
      }
  },
    {
        element: "#Habits",
        popover: {
            title: "Here You Can Add your Habits",
            description: `and by completing them you get crystals`,
            position: "right",
        }
    },
    {
        element: "#Dailies",
        popover: {
            title: "This is Your Daily Habits",
            position: "right",
        }
    },
    {
      element: "#shoper",
      popover: {
          title: "This Is Store",
          position: "left",
      }
  },
  {
    element: "#Clickable",
    popover: {
        title: "Push This Button To Add Item",
        position: "left",
    }
},
  {
    element: "#itemers",
    popover: {
        title: "This Is Store",
        description:"Here You Can Buy Ingame Staff",
        position: "left",
    }
},
])

// driver.start()


function myfunction() {
  window.location.href="main.html";  
}

const knopka = document.querySelector(".btn-success")

knopka.addEventListener("click", () =>{
  style.backgroundColor = "#152047"
})