let index = 3;
colours =["#B705F2","#E81313","#ED0C7D","#051DF7","#05F766","#ED18CA"]
function setup(){
 createCanvas(windowWidth,windowHeight,WebGLSync)
  frameRate(60)
   angleMode(DEGREES)
  halfWidth = width/2;
  halfHeight = height/2;
  objects();
 sections = [bottom,topLeft,topRight]
  
}
function objects(){
 bottom = {
   graphic: createGraphics(halfWidth,halfHeight,WEBGL),
    diameter: 60,
    xValue: halfWidth/2,
    yValue: halfHeight,
    colour: index +=2,
  } 
  
 topLeft = {
   graphic: createGraphics(halfWidth,halfHeight,WEBGL),
   diameter: 60,
   colour: index +=1,
   xValue: 0,
   yValue: 0,
 }

  topRight = {
 graphic: createGraphics(halfWidth,halfHeight,WEBGL),
    diameter: 60,
   colour: index += 3,
   xValue: halfWidth,
   yValue: 0,
  }
}

function draw(){
 shapes();
  if (frameCount == 50){
    index ++ 
    frameCount = 0
  }
}

function shapes(){
  for (section of sections){
    section.graphic.background(30,30,30,100);
     background(30,30,30,80);
    section.graphic.fill(colours[index % colours.length])
    section.graphic.stroke(colours[index % colours.length])
    section.graphic.strokeWeight(10)
    section.graphic.rotate(sin(1));
 section.graphic.torus(80,15);

   image(section.graphic, section.xValue, section.yValue);
}}