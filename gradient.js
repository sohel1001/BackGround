var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var direction = document.getElementById("direct");
var body=document.getElementById("grad");
function changer() {
    body.style.background = 
    "linear-gradient(to "+direction.value+", " 
    +color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.innerHTML = body.style.background;
}


color1.addEventListener("input",changer)
color2.addEventListener("input",changer)
direction.addEventListener("click",changer)
// css.addEventListener("mouseMove",function changeText() {
//     css.innerHTML=changer;
    
// })