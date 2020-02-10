document.getElementById("title").style.color = "black"; //changes test color for hello(title) to black
document.getElementById("title").innerHTML = "bananas"; //this is how you can dynamically change information on a webpage without changing html (ie. profile image thumb nails like changed dynamically for each user)
//these are how you change the individual id's 
var node = document.createElement(li);
var textNode = document.createTextNode("water");
Node.appendChild(textNode);
document.getElementById("listOne").appendChild(node);
//element.classList would allow us to manipulate entire classes instead of id's

