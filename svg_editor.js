import {Menu} from './svgExtensions/menuSvg.js'
import * as elemSvg from './svgExtensions/elementsSvg.js'
import {eventDrewElement} from './svgExtensions/eventsElementsSvg.js'

document.getElementById("areaSvgMenu").appendChild(Menu())

const btnCreateSvgArea = document.getElementById('inpSvgCreateArea')

const btnCreateLine = document.getElementById('inpCreateLine')
const btnCreateCircle = document.getElementById('inpCreateCircle')
const btnCreateSquere = document.getElementById('inpCreateSquare')


btnCreateSvgArea.addEventListener('click',()=>{
    document.getElementById("areaSvgWorkZone").appendChild(elemSvg.SvgCreateArea())
})


// AddEventListener button click create elements
let eventAdd = false

btnCreateLine.addEventListener('click', ()=>{eventDrewElement('line')})
btnCreateCircle.addEventListener('click', ()=>{eventDrewElement('circle')})
btnCreateSquere.addEventListener('click', ()=>{eventDrewElement('square')})

document.querySelector('.dropbtn').addEventListener('click',()=>{
    document.getElementById("selectDropDownMenu").classList.toggle("show");
})

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



