import * as elemSvg from './elementsSvg.js'

function selectElement(){
    console.log("Select Event")
    let a,b,c,d, x, y;
    let inputID = document.getElementById('inpID')
    let inputX1 = document.getElementById('inpX1')
    let inputY1 = document.getElementById('inpY1')
    let inputX2 = document.getElementById('inpX2')
    let inputY2 = document.getElementById('inpY2')

    let SContent = document.getElementById('SContent')
    let LowLevelSContent = SContent.children[0].getElementsByTagName('g')
    let AreaRect = SContent.children[0].children[0]
    console.log(AreaRect)
    let rect = AreaRect.getBoundingClientRect()
    for (let i=0; i<LowLevelSContent.length; i++){
        let elemId = LowLevelSContent[i].getAttribute("v:mid")
        let elemPath = LowLevelSContent[i].getElementsByTagName("path")
        let defualtStroke, defualtStrokeWidth;

        LowLevelSContent[i].onmouseenter = function(){
            if (typeof(elemId) =='string'){
                for (let j=0; j<elemPath.length; j++){
                    defualtStroke = elemPath[j].getAttribute('stroke')
                    defualtStrokeWidth = elemPath[j].getAttribute('stroke-width')
                    elemPath[j].style.stroke = "rgba(0,123,245,0.71)"
                    elemPath[j].style.strokeWidth = '4.5'
                }
            }
        }
        LowLevelSContent[i].onmouseleave = function(){
            for(let j=0; j<elemPath.length; j++){
                elemPath[j].style.stroke = defualtStroke
                elemPath[j].style.strokeWidth = defualtStrokeWidth
            }
        }

        LowLevelSContent[i].onmousedown = function(){
            if(typeof(elemId) =='string'){

                for(let j=0; j<elemPath.length; j++){
                    console.log('ID:', LowLevelSContent[i].getAttribute("v:mid"),
                                " Transform:",LowLevelSContent[i].getAttribute("transform") , //matrix(-1,0,0,-1,1134.9395,1605.1057)
                                ' D: ', elemPath[j].getAttribute('d'))
                    let str = LowLevelSContent[i].getAttribute("transform")
                    const match = str.match(/\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^)]+)\)/);
                    // Извлечение чисел из совпадения
                    if (match) {
                        const numbers = match.slice(1).map(parseFloat);
                        a = numbers[0]
                        b = numbers[1]
                        c = numbers[2]
                        d = numbers[3] 
                        x = numbers[4]
                        y = numbers[5]
                        console.log("X: ", x, " Y: ", y);
                    } else {
                        console.log("Совпадение не найдено");
                    }
                    
                    inputID.value = LowLevelSContent[i].getAttribute("v:mid")
                    inputX1.value = x
                    inputY1.value = y
                    
                    inputX1.onchange = function(){
                        x = inputX1.value
                        LowLevelSContent[i].setAttribute("transform", "matrix("+String(a)+","+String(b)+","+String(c)+","+String(d)+","+String(x)+","+String(y)+")")
                    }
                    inputY1.onchange = function(){
                        y = inputY1.value
                        LowLevelSContent[i].setAttribute("transform", "matrix("+String(a)+","+String(b)+","+String(c)+","+String(d)+","+String(x)+","+String(y)+")")
                    }

                    LowLevelSContent[i].onmousemove = function(event){
                        console.log("X-move: ", event.pageX + rect.left, " Y-move: ", event.pageY - rect.top);
                        // x = event.pageX - rect.left
                        // y = event.pageY - rect.top
                        LowLevelSContent[i].setAttribute("transform", "matrix("+String(a)+","+String(b)+","+String(c)+","+String(d)+","+String(x)+","+String(y)+")")
                    }
                }
            }
        }

    }
    
    

}





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
    
    let rect = sContent.getBoundingClientRect()
    let startDraw, moveDraw, endDraw;
    let newLine, newAreaSelect;

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


    
    if(type === 'select'){
        console.log("ТУТА")
        let getElement,defultStroke ,dataElement
        let x,y,r
        let x1,y1,x2,y2
        
        sContentID.onmouseover = function(event){
            console.log("ТУТА2")
            if (event.target.id){
                getElement = document.getElementById(event.target.id)
                defultStroke = getElement.getAttribute('stroke')
                getElement.setAttribute('stroke', '#20F')
            }
        }
        sContentID.onmouseout = function(){
            // sContentID.onmouseover = null
            getElement.setAttribute('stroke', defultStroke)
        }
        
        
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
    

    

    let defultStroke, defultStrokeWidth;
    let selectedID;

   

    sContent.onmouseout = function(event){
        if (event.target.id){
            console.log(event.target.id);
            let getElement = sContent.getElementById(event.target.id)
            getElement.setAttribute('stroke',defultStroke)
            getElement.setAttribute('stroke-width', defultStrokeWidth)
        }
    }
    
    
        




   
    

   

    


    
}


export {eventDraw,eventSelect, selectElement}