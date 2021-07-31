
// Exercise 1 : Change The Navbar

let newDiv = document.getElementById("navBar")
newDiv.getAttribute('navBar'); 
newDiv.setAttribute('id', "socialNetworkNavigation");  


let li1 = document.createElement("li");
let a = document.createElement("a");
a.setAttribute("href", "#")
a.innerHTML = "Logout";
li.appendChild(a);
ul.appendChild(li);
let list = ul.firstElementChild.textContent;
let List2 = ul.lastElementChild.textContent;
console.log(ul.lastElementChild.textContent);
console.log(ul.firstElementChild.textContent);

let as = document.getElementsByTagName("a");
console.log(as[0].innerHTML)
console.log(as[as.length - 1].innerHTML)



