// exercice1

console.log(document.getElementById('container'));//lea première question 1

let change = document.getElementsByTagName('ul')[0];//la deuxieme question 2
console.log(change.lastElementChild.innerHTML="Richard");
let changeFirstName = document.querySelectorAll('ul li:nth-Child(1)'); //changer le nom des premier nom de chaque ul
console.log(changeFirstName[0].textContent="said");
console.log(changeFirstName[1].textContent="said");

let heading = document.querySelectorAll('ul li:nth-Child(2)');//suppression du deuxieme li de du deuxieme ul
console.log(heading[1].remove());
