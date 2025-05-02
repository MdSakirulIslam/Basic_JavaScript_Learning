var element;
//element = document.getElementById("header").innerHTML;
//element = document.getElementById("header").getAttribute("class");
//element = document.getElementById("header").getAttribute("style");
//element = document.getElementById("header").getAttribute("onClick");
//element = document.getElementById("header").getAttributeNode("onClick");
//element = document.getElementById("header").attributes[3].value;
//console.log(element);
        // How to set Dom


// document.getElementById("header").innerHTML= "<h1>Wow</h1>";
// element = document.getElementById("header").innerHTML;
// console.log(element);

document.getElementById("header").innerHTML= "<h1>Wow</h1>";
document.getElementById("header").setAttribute("class","xyz");
element = document.getElementById("header").getAttribute("class");
console.log(element);