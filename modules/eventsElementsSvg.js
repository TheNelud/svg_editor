import * as elemSvg from './elementsSvg.js'



// Create id element
let ID_ELEMENT_ARR = []
let ID_ELEMENT = "svg_element_"
let id;
let addID_Element = () =>{
    for(let i=0; i<ID_ELEMENT_ARR.length+1; i++){
        id = ID_ELEMENT+i
    }
    ID_ELEMENT_ARR.push(id)
    return id
  }

let eventDrawElement = (element, id)=>{
    const btnEditSlider = document.getElementById('inpEditSlider');
    const btnEditColor = document.getElementById('inpEditColor');
    const btnEditBackground = document.getElementById('inpEditBackground');
    
    const sContent = document.querySelector('.sContent');
    let svgElement, svgShadowLine ;

    let rectLeft = sContent.getBoundingClientRect().left;
    let rectTop = sContent.getBoundingClientRect().top;

    let x1, x2, y1, y2 =0
    let isDrawing = false;
    
    let color = btnEditColor.value;
    let size = btnEditSlider.value;
    let bg = btnEditBackground.value;
    id = addID_Element()

    btnEditColor.addEventListener('change', ()=>{color = btnEditColor.value;})
    btnEditSlider.addEventListener('input',()=>{size = btnEditSlider.value;})
    btnEditBackground.addEventListener('input',()=>{bg = btnEditBackground.value;})

    let startPosition = (event)=>{
        x1 = event.pageX-rectLeft;
        y1 = event.pageY-rectTop;
        console.log("X: ", x1, " Y: ", y1)
        
    }
    let endPosition = (event)=>{
        x2 = event.pageX-rectLeft;
        y2 = event.pageY-rectTop;
        console.log("X: ", x2, " Y: ", y2)
        switch(element){
            case 'line':  svgElement = elemSvg.CreateLineSVG(id, x1,y1,x2,y2,color,size);break;
            case 'circle':  svgElement = elemSvg.CreateCircleSVG(id,x1,y1,x2,y2,color,size,bg);break;
            case 'square':  svgElement = elemSvg.CreateSquareSVG(id,x1,y1,x2,y2,color,size,bg);break;
        }
        sContent.appendChild(svgElement)
        
    }
    
    sContent.addEventListener('mousedown', startPosition, {once:true})
    sContent.addEventListener('mouseup', endPosition, {once:true})
    

}

function eventSelectElement(){
    let sContent = document.querySelector('.sContent')

    let inputID = document.getElementById('inpID')
    let inputX1 = document.getElementById('inpX1')
    let inputY1 = document.getElementById('inpY1')
    let inputX2 = document.getElementById('inpX2')
    let inputY2 = document.getElementById('inpY2')

    let lblX1 = document.getElementById('lblX1')
    let lblY1 = document.getElementById('lblY1')
    let lblX2 = document.getElementById('lblX2')
    let lblY2 = document.getElementById('lblY2')

    const btnEditSlider = document.getElementById('inpEditSlider');
    const btnEditColor = document.getElementById('inpEditColor');
    const btnEditBackground = document.getElementById('inpEditBackground');


    let corA = document.createElementNS('http://www.w3.org/2000/svg','circle')
    corA.setAttribute('stroke', 'red')
    corA.setAttribute('fill', 'red')
    let corB = document.createElementNS('http://www.w3.org/2000/svg','circle')
    corB.setAttribute('stroke', 'red')
    corB.setAttribute('fill', 'red')

    let defultStroke;
    let selectedID;

    sContent.addEventListener('click',(event)=>{
        if (event.target.id){
            let getElement = sContent.getElementById(event.target.id)
            if (getElement.tagName === 'line'){
                // Входные данные елемента
                let elemAttr = {
                    id:getElement.getAttribute("id"),
                    x1:getElement.getAttribute('x1'),
                    y1:getElement.getAttribute('y1'),
                    x2:getElement.getAttribute('x2'),
                    y2:getElement.getAttribute('y2'),
                    stroke_width:getElement.getAttribute('stroke-width')
                }
                // Изменение инпутов выбранного элемента
                getElement.classList.add('selected-element-svg')
                inputID.value = elemAttr.id
                inputX1.value = elemAttr.x1
                lblX1.textContent = 'x1'
                inputY1.value = elemAttr.y1
                lblY1.textContent = 'y1'
                inputX2.value = elemAttr.x2
                lblX2.textContent = 'x2'
                inputY2.value = elemAttr.y2
                lblY2.textContent = 'y2'

                inputY2.style.display ='block'
                lblY2.style.display = 'block'
                
                // Точки начала и конца отрезка
                corA.setAttribute('id', 'corA')
                corA.setAttribute('cx', elemAttr.x1)
                corA.setAttribute('cy', elemAttr.y1)
                corA.setAttribute("r", elemAttr.stroke_width);
                corB.setAttribute('id', 'corB')
                corB.setAttribute('cx', elemAttr.x2)
                corB.setAttribute('cy', elemAttr.y2)
                corB.setAttribute("r", elemAttr.stroke_width);

                sContent.appendChild(corA)
                sContent.appendChild(corB)
                
                // Эвенты использования инпутов
                inputX1.oninput  = function(){getElement.setAttribute("x1", this.value)}
                inputY1.oninput  = function(){getElement.setAttribute("y1", this.value)}
                inputX2.oninput  = function(){getElement.setAttribute("x2", this.value)}
                inputY2.oninput  = function(){getElement.setAttribute("y2", this.value)}
                btnEditSlider.oninput = function(){getElement.setAttribute("stroke-width", this.value)}
                btnEditColor.oninput = function(){getElement.setAttribute("stroke", this.value)}
                
                // Драг энд дроп выбранного элемента
                sContent.onmousedown  = function(event){
                    let eventTargetID = event.target.id
                    sContent.onmousemove = function(event){
                      
                        if (eventTargetID === 'corA'){
                            corA.setAttribute('cx', event.pageX)
                            corA.setAttribute('cy', event.pageY)
                            // const shiftX = event.pageX - startCoorditane.x1;
                            // const shiftY = event.pageY - startCoorditane.y1;
                            getElement.setAttribute('x1', event.pageX)
                            getElement.setAttribute('y1', event.pageY)
                            // getElement.setAttribute('x2', event.pageX + shiftX)
                            // getElement.setAttribute('y2', event.pageY + shiftY)
                         }else if(eventTargetID ==='corB'){
                            corB.setAttribute('cx',event.pageX)
                            corB.setAttribute('cy',event.pageY)
                            getElement.setAttribute('x2', event.pageX)
                            getElement.setAttribute('y2', event.pageY)
                        }
                        
                    }
                    
                };
                sContent.onmouseup = function(){
                    sContent.onmousemove = null
                }


            }
            else if (getElement.tagName === 'circle'){
                getElement.classList.add('selected-element-svg')
                inputID.value = getElement.getAttribute("id")
                inputX1.value = getElement.getAttribute("cx")
                lblX1.textContent = 'cx'
                inputY1.value = getElement.getAttribute("cy")
                lblY1.textContent = 'cy'
                inputX2.value = getElement.getAttribute("r")
                lblX2.textContent = 'r'

                inputY2.style.display ='none'
                lblY2.style.display = 'none'

                inputX1.oninput  = function(){getElement.setAttribute("cx", this.value)}
                inputY1.oninput  = function(){getElement.setAttribute("cy", this.value)}
                inputX2.oninput  = function(){getElement.setAttribute("r", this.value)}
                btnEditBackground.oninput  = function(){getElement.setAttribute("fill", this.value)}
                btnEditSlider.oninput = function(){getElement.setAttribute("stroke-width", this.value)}
                btnEditColor.oninput = function(){getElement.setAttribute("stroke", this.value)}


               
                sContent.onmousedown = function(){
                    sContent.onmousemove = function(event){
                        getElement.setAttribute('cx', event.pageX)
                        getElement.setAttribute('cy', event.pageY)
                    }
                }

                sContent.onmouseup = function(){
                    sContent.onmousemove = null
                }
            }
            else if (getElement.tagName === 'rect'){
                getElement.classList.add('selected-element-svg')
                inputID.value = getElement.getAttribute("id")
                inputX1.value = getElement.getAttribute("x")
                lblX1.textContent = 'x'
                inputY1.value = getElement.getAttribute("y")
                lblY1.textContent = 'y'
                inputX2.value = getElement.getAttribute("width")
                lblX2.textContent = 'Ширина'
                inputY2.value = getElement.getAttribute("height")
                lblY2.textContent = 'Высота'

                inputY2.style.display ='block'
                lblY2.style.display = 'block'

                inputX1.oninput  = function(){getElement.setAttribute("x", this.value)}
                inputY1.oninput  = function(){getElement.setAttribute("y", this.value)}
                inputX2.oninput  = function(){getElement.setAttribute("width", this.value)}
                inputY2.oninput  = function(){getElement.setAttribute("height", this.value)}
                btnEditSlider.oninput = function(){getElement.setAttribute("stroke-width", this.value)}
                btnEditColor.oninput = function(){getElement.setAttribute("stroke", this.value)}
            }        
        }
    })



    sContent.onclick = function(event) {
        if (!event.target.matches('.selected-element-svg')) {
            var selected_elements = sContent.querySelectorAll(".selected-element-svg");
            var i;
            for (i = 0; i < selected_elements.length; i++) {
                var getElement = selected_elements[i];
                if (getElement.classList.contains('selected-element-svg')) {
                    getElement.classList.remove('selected-element-svg');
                    sContent.removeChild(corA)
                    sContent.removeChild(corB)
                }
            }
        }
    }
    

   

    


    
}


export {eventDrawElement,eventSelectElement}