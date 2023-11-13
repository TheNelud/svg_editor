import {Menu} from './modules/menuSvg.js'
import * as elemSvg from './modules/elementsSvg.js'
import {eventDrawElement, eventSelectElement} from './modules/eventsElementsSvg.js'

document.getElementById("areaSvgMenu").appendChild(Menu())

const btnCreateSvgArea = document.getElementById('inpSvgCreateArea')

const btnSelectCursor = document.getElementById('inpCursor')

const btnCreateLine = document.getElementById('inpCreateLine')
const btnCreateCircle = document.getElementById('inpCreateCircle')
const btnCreateSquere = document.getElementById('inpCreateSquare')

document.getElementById("areaSvgWorkZone").appendChild(elemSvg.SvgCreateArea())

btnCreateSvgArea.addEventListener('click',()=>{
    document.getElementById("areaSvgWorkZone").removeChild(elemSvg.SvgCreateArea())
    document.getElementById("areaSvgWorkZone").appendChild(elemSvg.SvgCreateArea())
})

// AddEventListener button click create elements

function line(){
  console.log('Start Line EVENT')
  eventDrawElement('line')
}

function circle(){
  eventDrawElement('circle')
}
function square(){
  eventDrawElement('square')
}

btnSelectCursor.addEventListener('click', eventSelectElement)

btnCreateLine.addEventListener('click', line)
btnCreateCircle.addEventListener('click', circle)
btnCreateSquere.addEventListener('click', square)

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



