import {Menu} from './modules/menuSvg.js'
import * as elemSvg from './modules/elementsSvg.js'
import {eventDraw, eventSelect} from './modules/eventsElementsSvg.js'

document.getElementById("areaSvgMenu").appendChild(Menu())

const btnCreateSvgArea = document.getElementById('inpSvgCreateArea')

const btnOpenSvg = document.getElementById('inpOpenSvg')
const btnSaveSvg = document.getElementById('inpSaveSvg')


btnCreateSvgArea.onclick = function(){
  document.getElementById("areaSvgWorkZone").appendChild(elemSvg.SvgCreateArea())
}



btnOpenSvg.onclick = async function(){
  const options = {
    multiple: false,
    types: [
      {
        description: 'svg',
        accept: {
          'image/svg+xml': '.svg'
        }
      }
    ],
    excludeAcceptAllOption: true
  }
  const [fileHandle] = await window.showOpenFilePicker(options)
  const file = await fileHandle.getFile()
  const fileContent = await file.text()

  console.log(fileContent)
  document.getElementById("areaSvgWorkZone").innerHTML = fileContent

  let svg = document.getElementById("areaSvgWorkZone").childNodes[2]
  svg.setAttribute("class", "sContentArea")
  svg.setAttribute('style', 'border: 1px solid black');
  svg.setAttribute('width', '97%');
  svg.setAttribute('height', '90vh');
  
}



btnSaveSvg.onclick = async function(){
  // настройки
  const options = {
    // рекомендуемое название файла
    suggestedName: 'test.svg',
    types: [
      {
        description: 'SVG',
        accept: {
          'image/svg+xml': '.svg'
        }
      }
    ],
    excludeAcceptAllOption: true
  }
  // данные для записи
  let dataSting = "Text"
  let data = document.getElementById('areaSvgWorkZone').innerHTML
  console.log(data)

  const fileHandle = await window.showSaveFilePicker(options)
  const writableStream = await fileHandle.createWritable()

  await writableStream.write(data)
  // данный метод не упоминается в черновике спецификации,
  // хотя там говорится о необходимости закрытия потока
  // для успешной записи файла
  await writableStream.close()

}





const btnSelectCursor = document.getElementById('inpCursor')
const btnCreateLine = document.getElementById('inpCreateLine')
const btnCreateCircle = document.getElementById('inpCreateCircle')
const btnCreateSquere = document.getElementById('inpCreateSquare')



// document.getElementById("areaSvgWorkZone").appendChild(elemSvg.SvgCreateArea())

// btnCreateSvgArea.addEventListener('click',()=>{
//     document.getElementById("areaSvgWorkZone").removeChild(elemSvg.SvgCreateArea())
//     document.getElementById("areaSvgWorkZone").appendChild(elemSvg.SvgCreateArea())
// })


btnCreateLine.onclick = function(){
  eventDraw('line')
}
btnCreateSquere.onclick = function(){
  eventDraw('rect')
}
btnCreateCircle.onclick = function(){
  eventDraw('circle')
}

btnSelectCursor.onclick = function(){
  eventDraw('select')
}

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



