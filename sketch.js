var hr,mn,sec

function setup() {
  createCanvas(1425,725);
 
  angleMode(DEGREES)
}

function draw() {
  background(0);
  hr = hour();
  mn = minute();
  sec = second();
  translate(720,400)
  rotate(-90)
  scAngle = map(sec,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)  
  

  push()
  rotate(scAngle)
 
  stroke(255,0,0)
  strokeWeight(5)
  line(0,0,140,0)
  pop()

  push()
  rotate(mnAngle)
  //translate(0,0)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,115,0)
  pop()

  push()
  rotate(hrAngle)
  //translate(0,0)
  stroke(0,0,225)
  strokeWeight(9)
  line(0,0,95,0)
  pop()

strokeWeight(5)
noFill()
stroke(255,0,0)
arc(0,0,400,400,0,scAngle)

strokeWeight(7)
noFill()
stroke(0,255,0)
arc(0,0,370,370,0,mnAngle)

strokeWeight(9)
noFill()
stroke(0,0,255)
arc(0,0,340,340,0,hrAngle)



  drawSprites();
}
