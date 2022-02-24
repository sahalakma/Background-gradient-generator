var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");



function bodyColor(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background+";"

    line1.textContent = "1st= " + color1.value;
    line2.textContent = "2st= " + color2.value;  
}



color1.addEventListener("input",bodyColor);

color2.addEventListener("input",bodyColor);
