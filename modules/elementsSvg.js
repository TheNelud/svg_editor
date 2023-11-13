function SvgCreateArea(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '1800');
    svg.setAttribute('height', '650');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute('class', 'sContent')
    return svg
    
}


function CreateLineSVG(id,x1, y1, x2, y2, color,size){
  console.log("Click create Line")
  var line = document.createElementNS('http://www.w3.org/2000/svg','line')
  line.setAttribute("id", id);
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", size);
  return line
}

function ShadowLineSvg(x1, y1, x2, y2){
  console.log('Draw shadow line')
  var line = document.createElementNS('http://www.w3.org/2000/svg','line')
  line.setAttribute('class', 'tmpShadowSvg')  
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", 'red');
  line.setAttribute("stroke-opacity", '0.3');
  line.setAttribute("stroke-dasharray", '5 5');
  line.setAttribute("stroke-width", '1');
  
  return line
}

function CreateCircleSVG(id,x1, y1, x2,y2, color, size, bg){
  console.log("Click create circle")
  var circle = document.createElementNS('http://www.w3.org/2000/svg','circle')
  circle.setAttribute("id", id);
  circle.setAttribute("cx", x1);
  circle.setAttribute("cy", y1);
  circle.setAttribute("r", Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
  circle.setAttribute("stroke", color);
  circle.setAttribute("stroke-width", size);
  circle.setAttribute("fill", bg);
  
  return circle
}


function CreateSquareSVG(id, x1, y1, x2,y2, color, size, bg){
  console.log("Click create Square")
  var square = document.createElementNS('http://www.w3.org/2000/svg','rect')
  square.setAttribute("id", id);
  if(x1 < x2 ){square.setAttribute("x", x1);}else{square.setAttribute("x", x1-Math.abs(x2-x1));}
  if(y1 < y2){square.setAttribute("y",y1)}else{square.setAttribute("y",y1-Math.abs(y2-y1));}
  square.setAttribute("width", Math.abs(x2-x1));
  square.setAttribute("height", Math.abs(y2-y1));
  square.setAttribute("stroke", color);
  square.setAttribute("stroke-width", size);
  square.setAttribute("fill",  bg);
  
  return square
}

export {SvgCreateArea,CreateLineSVG,CreateCircleSVG,CreateSquareSVG, ShadowLineSvg}