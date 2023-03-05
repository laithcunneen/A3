// JAVASCRIPT FOR A3.html 

var cat_counter = 1;
var dog_counter = 1;
var frog_counter = 1;

var cat_color = "#Ea9022"; // orange
var dog_color = "#cb5e34"; // brown
var frog_color = "#009933"; // green

function btnImgFunction(animal) {
  var animal_lower = animal.toLowerCase();

  var text_box_animals = document.getElementById("txt_box_animals");       
  var span_animals = document.getElementById("span_animals"); 
  var image = document.getElementById("img_animals");   

  var txt_color = eval(animal_lower + "_color");
  var btn_counter = eval(animal_lower + "_counter")

  // Loop to show different image when an animal is clicked more than once
  eval(animal_lower + '_counter++;');
  if(btn_counter > 4) {
    eval(animal_lower + '_counter = 1;');
    btn_counter = 1;
  }
  counter = btn_counter;
  
  var img_suffix = "_" + counter;

  // Change image source
  image.src = 'images/animals/' + animal_lower + img_suffix + ".png"; 
  image.alt = animal; 

  // Update input/text box
  text_box_animals.value = "User clicks " + animal;  
  text_box_animals.style.background = txt_color;
  text_box_animals.style.color = "white";
  text_box_animals.style.fontSize = "18px";
  
  // Update span/text area
  span_animals.innerHTML = animal + " is clicked";   
  span_animals.style.display = 'inline';   
  span_animals.style.color = txt_color;
}  

