// exercice3
let navbar =document.getElementById("navBar");//changer l'attribut navBar
console.log('navbar:',navbar)
navbar.setAttribute("id","socialNetworkNavigation")//changer l'attribut navBar en socialNetworkNavigation

let newli =document.createElement('li');//creer un li et mettre 
let text =document.createTextNode('Logout')
newli.appendChild(text);
document.body.appendChild(newli);
const ul =navbar.firstElementChild;//mettre li dans le ul
ul.appendChild(newli)//mettre li dans le ul

let first = document.querySelectorAll('ul li:nth-Child(1)'); //afficher le premier et le dernier element de li
console.log(first[0].firstElementChild.textContent);
 const lastchild =ul.lastElementChild
 console.log(lastchild.textContent)




