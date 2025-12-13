function setup() {
  createCanvas(1520, 730);

  // Tamaño del texto con contorno
  textSize(90);

}

function draw() {
  background(60, 0, 200);

  //Sombrero
  noStroke();
  fill(0, 0, 0);
  rect(450, 10, 200, 80);
  rect(400, 50, 300, 50);

  noStroke();
  fill(255, 0, 0);
  rect(450, 50, 200, 10);
  
  //Cabeza
  stroke (1);
  fill(255, 255, 255);
  ellipse(550, 250, 550, 300);

  //Cabeza
  stroke (1);
  fill(255, 255, 255);
  ellipse(550, 550, 700, 350);

  //Ojos 
  noStroke ();
  fill(0, 0, 0);
  circle(550, 200, 40);
  circle(400, 200, 40);

  //Nariz
  fill(153, 77, 0);
  triangle(550, 250, 450, 250, 320, 370);

  //Botones 
  noStroke ();
  fill(0, 0, 0);
  circle(500, 430, 40);
  circle(500, 530, 40);
  circle(500, 630, 40);

  stroke(0);
  strokeWeight(4);
  fill(255);
  text('Feliz Navidad', 900, 350);
  
}