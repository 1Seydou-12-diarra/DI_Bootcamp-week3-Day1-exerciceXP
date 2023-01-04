// exercice2
let elem = document.querySelector('div')
 // make its background blue
  elem.style.background = ' blue'
  
  
let bordure = document.querySelectorAll('ul')[0];
console.log(bordure.lastElementChild.style.border ="solid");
//   bordure[0].style.border ="2px solide red"

let heading = document.querySelectorAll('ul li:nth-Child(1)');//suppression du deuxieme li de du deuxieme ul
console.log(heading[0].remove());
document.body.style.fontSize = "35px";//la taille des element du body
