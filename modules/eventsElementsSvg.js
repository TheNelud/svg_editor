import * as elemSvg from './elementsSvg.js'



// Create id element
let ID_ELEMENT_ARR = []
let ID_ELEMENT = "svg_element_"
let id_element;

let addID_Element = () =>{
    for(let i=0; i<ID_ELEMENT_ARR.length+1; i++){
        id_element = ID_ELEMENT+i
    }
    ID_ELEMENT_ARR.push(id_element)
    return id_element

  }


function eventDraw(type) { 
    console.log(type)  
    let sContent = document.querySelector('.sContentArea');
    let sContentID = document.getElementById('SContent')
    console.log(sContent)
    let rect = sContent.getBoundingClientRect()
    let startDraw, moveDraw, endDraw;
    let newLine, newAreaSelect;
    
    if(type === 'select'){
        
        
    }else{
        sContent.onmousedown = function(event){
            startDraw = {
                x: event.pageX - rect.left,
                y: event.pageY - rect.top
            }
            newLine = elemSvg.drawLine(addID_Element())
            newAreaSelect = elemSvg.drawLine()
            console.log("Start: ", startDraw)

            
            sContent.onmousemove = function(event){
                moveDraw = {
                    x: event.pageX - rect.left,
                    y: event.pageY - rect.top
                }

                switch(type){
                    case 'line': 
                        newLine.setAttribute('d', 'M'+ startDraw.x + ' ' + startDraw.y + " L " + moveDraw.x + ' ' + moveDraw.y );
                        elemSvg.selectArea(newAreaSelect, startDraw.x, startDraw.y,  moveDraw.x, moveDraw.y, type)
                        break;
                    case 'rect': 
                        newLine.setAttribute('d', 'M'+ startDraw.x + ' ' + startDraw.y + " H " + moveDraw.x + " V " + moveDraw.y + " H " + startDraw.x + " V " + startDraw.y);
                        elemSvg.selectArea(newAreaSelect, startDraw.x, startDraw.y,  moveDraw.x, moveDraw.y, type)
                        break;
                    case 'circle': 
                        let r = Math.sqrt(Math.pow((startDraw.x - moveDraw.x), 2) + Math.pow((startDraw.y - moveDraw.y), 2));
                        newLine.setAttribute('d', 'M'+ startDraw.x + ' ' + startDraw.y + " m " + r + ", 0 "+ " a "+ r +","+ r+ " 0 1,1 " + (-(r * 2))+" ,0 a" + r+ ","+r +" 0 1,1 "+ (r*2)+" ,0" );
                        elemSvg.selectArea(newAreaSelect, startDraw.x, startDraw.y,  moveDraw.x, moveDraw.y, type)
                        break;
                }
                
                sContent.appendChild(newLine)
                sContentID.appendChild(newLine)
                sContent.appendChild(newAreaSelect)
                console.log("Move: ", moveDraw)
                console.log(newLine)
            }
        }
        
        sContent.onmouseup = function(event){
            endDraw = {
                x: event.pageX - rect.left,
                y: event.pageY - rect.top
            }
            console.log("End: ", endDraw)
            sContent.removeChild(newAreaSelect)
            sContent.onmousemove = null
        }
    }
}




function eventSelect(){
    console.log("SELECT EVENT")
    
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

    let defultStroke, defultStrokeWidth;
    let selectedID;

    sContent.onmouseover = function(event){
        if (event.target.id){
            console.log(event.target.id);
            let getElement = sContent.getElementById(event.target.id)
            defultStroke = getElement.getAttribute('stroke')
            defultStrokeWidth = getElement.getAttribute('stroke-width')
            getElement.setAttribute('stroke','red')
            getElement.setAttribute('stroke-width', '4')
        }
    }

    sContent.onmouseout = function(event){
        if (event.target.id){
            console.log(event.target.id);
            let getElement = sContent.getElementById(event.target.id)
            getElement.setAttribute('stroke',defultStroke)
            getElement.setAttribute('stroke-width', defultStrokeWidth)
        }
    }
    
    
        




   
    

   

    


    
}


export {eventDraw,eventSelect}