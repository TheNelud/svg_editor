import * as elemSvg from './elementsSvg.js'


let eventDrewElement = (element)=>{
    const btnEditSlider = document.getElementById('inpEditSlider');
    const btnEditColor = document.getElementById('inpEditColor');
    const btnEditBackground = document.getElementById('inpEditBackground');

    const sContent = document.querySelector('.sContent');
    let svgElement;

    let rectLeft = sContent.getBoundingClientRect().left;
    let rectTop = sContent.getBoundingClientRect().top;

    let x1, x2, y1, y2 =0
    
    let color = btnEditColor.value;
    let size = btnEditSlider.value;
    let bg = btnEditBackground.value;

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
            case 'line':  svgElement = elemSvg.CreateLineSVG(x1,y1,x2,y2,color,size);break;
            case 'circle':  svgElement = elemSvg.CreateCircleSVG(x1,y1,x2,y2,color,size,bg);break;
            case 'square':  svgElement = elemSvg.CreateSquareSVG(x1,y1,x2,y2,color,size,bg);break;
        }
        sContent.appendChild(svgElement)
    }
    sContent.addEventListener('mousedown', startPosition)
    sContent.addEventListener('mouseup', endPosition)

}


export {eventDrewElement}