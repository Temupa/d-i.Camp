// Exercise 2 : Users

 let replaceName = document.getElementsByTagName("li");
 for (li of replaceName) {
    if (li.innerHTML === "Pete") {
         li.innerHTML = "Richard"
    }
 }

 let uls = document.getElementsByTagName("ul");
 for (ul of uls) {
     ul.firstElementChild.innerHTML = "Itai"
     let newli = document.createElement("li");
     newli.innerHTML = "hey students"
     ul.appendChild(newli);
}

 let newList_3 = document.getElementsByClassName("list")[1];
 let newName = newList_3.children[1];
 newList_3.removeChild(newName);
