function SvgCreateArea(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg')
    svg.setAttribute('viewBox', '0 0 1800 900');
    svg.setAttribute('style', 'border: 1px solid black');
    
    var gSContent = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gSContent.setAttribute('id', "SContent")

    var gLevelFirst = document.createElementNS("http://www.w3.org/2000/svg", "g");

    var gLevelContent = document.createElementNS("http://www.w3.org/2000/svg", "g");

    gLevelFirst.appendChild(gLevelContent)
    gSContent.appendChild(gLevelFirst)
    svg.appendChild(gSContent)
    
    return svg
}

function CreateGroupElements(){
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute('class', "layer")
    return g
}

// Draw  elements BASE
function drawLine(){
  let line = document.createElementNS('http://www.w3.org/2000/svg','path')
  line.setAttribute('stroke', 'black')
  line.setAttribute('fill', 'transparent')
  return line
}




function CreateSelectorCircle(id, cx, cy){
  let selectCircle = document.createElementNS('http://www.w3.org/2000/svg','circle')
  selectCircle.setAttribute("id", id)
  selectCircle.setAttribute("cx", cx)
  selectCircle.setAttribute("cy", cy)
  selectCircle.setAttribute("r", "4")
  selectCircle.setAttribute("stroke-width", "2")
  selectCircle.setAttribute("fill", "#22C")
  return selectCircle
}

function selectArea(draw,x1, y1, x2, y2, type){
  let rect = draw
  rect.setAttribute("stroke", "#22C");
  rect.setAttribute("stroke-width", "0.5");
  rect.setAttribute("stroke-dasharray", "5,5")
  switch (type){
    case 'line':
        rect.setAttribute('d', 'M'+ x1 + ' ' + y1 + " H " + x2 + " V " + y2 + " H " + x1 + " V " + y1);
        break;
    case 'circle':
        rect.setAttribute('d', 'M'+ x1 + ' ' + y1 + " L " + (x2) + " " + (y2));
        break;
    case 'rect':
        rect.setAttribute('d', 'M'+ x1 + ' ' + y1 + " L " + (x2) + " " + (y2));
        break;
  } 
  
   
  return rect
}

function groupSelect(type,x1,y1,x2,y2){
  console.log("Element: ",type," X1: ", x1," Y1: ", y1 ," X2: ",x2 ," Y2: ", y2)
  let x, y, width, height;
  switch (type){
      case 'line':
          if(x1<x2 && y1<y2){width = x2-x1;height = y2-y1;x = x1;y = y1;}
          else if(x1<x2 && y1>y2){width = x2-x1; height = y1-y2;x = x1 ;y = y1 - height;}
          else if(x1>x2 && y1>y2){width = x1-x2;height = y1-y2;x = x1-width;y = y2;}
          else if(x1>x2 && y1<y2){width = x1-x2;height = y2-y1;x = x1 - width;y = y1;}
          break;
      case 'circle':
          let r = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
          if(x1<x2 && y1<y2){width = 2*r;height = 2*r;x = x1 - width/2;y = y1 - height/2 ;}
          else if(x1<x2 && y1>y2){width = 2*r; height = 2*r;x = x1 - width/2 ;y = y1 - height/2;}
          else if(x1>x2 && y1>y2){width = 2*r;height = 2*r;x = x1 - width/2;y = y1 - height/2;}
          else if(x1>x2 && y1<y2){width = 2*r;height = 2*r;x = x1 - width/2;y = y1-height/2;}
          break;
      case 'rect':
          if(x1 < x2 && y1 < y2){width = x2-x1;height=y2-y1; x=x1; y=y1}
          else if(x1 < x2 && y1 > y2){width=x2-x1;height=y1-y2; x=x1; y=y1-height}
          else if(x1>x2 && y1>y2){width=x1-x2;height=y1-y2; x=x1-width;y=y1-height}
          else if(x1>x2 && y1<y2){width=x1-x2;height=y2-y1; x=x1-width; y=y1}
          break;
  }   

  
  let groupSelect = CreateGroupElements('noneGroup')
  // let selectRect = CreateSelectorRect('SelecetRect', x, y, width, height)
  // console.log("X: ", x," Y: ", y ," WIDTH: ",width ," HEIGHT: ", height)
  let grouSelectCircle = CreateGroupElements()
  let selectCircleNW = CreateSelectorCircle('selectorCircle_nw', x, y)
  let selectCircleN = CreateSelectorCircle('selectorCircle_n', x+width/2 , y)
  let selectCircleNE = CreateSelectorCircle('selectorCircle_ne', x+width, y)
  let selectCircleE = CreateSelectorCircle('selectorCircle_e', x+width, y+height/2)
  let selectCircleSE = CreateSelectorCircle('selectorCircle_se', x+width, y+height)
  let selectCircleS = CreateSelectorCircle('selectorCircle_s', x+width/2, y+height)
  let selectCircleSW = CreateSelectorCircle('selectorCircle_sw', x, y+height)
  let selectCircleW = CreateSelectorCircle('selectorCircle_w', x, y+height/2)
  let selectCircleArr = [selectCircleNW,selectCircleN,selectCircleNE,
                          selectCircleE,selectCircleSE ,selectCircleS,
                          selectCircleSW,selectCircleW]
  selectCircleArr.forEach((element)=>{grouSelectCircle.appendChild(element)})
  // groupSelect.appendChild(selectRect)
  groupSelect.appendChild(grouSelectCircle)
  return groupSelect
}



export {SvgCreateArea,drawLine,selectArea,
    CreateGroupElements, CreateSelectorCircle, groupSelect}