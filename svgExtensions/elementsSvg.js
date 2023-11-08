function SvgCreateArea(){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('width', '1800');
    svg.setAttribute('height', '650');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute('class', 'sContent')
    return svg
    
}


function CreateLineSVG(x1, y1, x2, y2, color,size){
  console.log("Click create Line")
  var line = document.createElementNS('http://www.w3.org/2000/svg','line')
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", size);
  return line
}

function CreateCircleSVG(x1, y1, x2,y2, color, size, bg){
  console.log("Click create circle")
  var circle = document.createElementNS('http://www.w3.org/2000/svg','circle')
  circle.setAttribute("cx", x1);
  circle.setAttribute("cy", y1);
  circle.setAttribute("r", Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)));
  circle.setAttribute("stroke", color);
  circle.setAttribute("stroke-width", size);
  circle.setAttribute("fill", bg);
  
  return circle
}


function CreateSquareSVG(x1, y1, x2,y2, color, size, bg){
  console.log("Click create circle")
  var square = document.createElementNS('http://www.w3.org/2000/svg','rect')
  if(x1 < x2 ){square.setAttribute("x", x1);}else{square.setAttribute("x", x1-Math.abs(x2-x1));}
  if(y1 < y2){square.setAttribute("y",y1)}else{square.setAttribute("y",y1-Math.abs(y2-y1));}
  square.setAttribute("width", Math.abs(x2-x1));
  square.setAttribute("height", Math.abs(y2-y1));
  square.setAttribute("stroke", color);
  square.setAttribute("stroke-width", size);
  square.setAttribute("fill",  bg);
  
  return square
}

export {SvgCreateArea,CreateLineSVG,CreateCircleSVG,CreateSquareSVG}