import FastSimplexNoise from 'fast-simplex-noise';

const noiseGen = new FastSimplexNoise({
  frequency: 0.01,
  max: 7,
  min: -7,
  octaves: 1
})

const width = 500;
const height = 200;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

let xPosition = 0;
let yPosition = height / 2;

let particleLength = 500;

let xPositionTail = xPosition - particleLength;

function draw(){
  context.fillStyle = `rgba(255, 255, 255, 1)`;
  context.fillRect(0, 0, width, height);

  context.beginPath();

  context.fillStyle = `rgba(0, 0, 0, 0)`;
  context.lineWidth = 1;
  context.moveTo(xPositionTail, yPosition + noiseGen.scaled([xPositionTail, 0]));

  for (let i = 0; i < particleLength; i++){
    context.lineTo(xPositionTail + i, yPosition + noiseGen.scaled([xPositionTail + i, 0]));
  }
  context.stroke();
  context.fill();

  context.closePath();
  context.beginPath();


  // context.strokeStyle = '#000000';

  // Straight line
  // context.lineTo(xPosition, yPosition);

  // Math.sin()
  // context.lineTo(xPosition, yPosition + Math.sin(xPosition * 0.05) * 20);

  // Using Math.random()
  // context.lineTo(xPosition, yPosition);

  // Using Noise
  // context.lineTo(xPosition, yPosition + noiseGen.scaled([0, xPosition]));
  // context.arc(xPosition, yPosition, 4, 0, Math.PI * 2, true)
  // context.stroke();
  context.arc(xPosition, yPosition + noiseGen.scaled([xPosition, 0]), 4, 0, Math.PI * 2, true)
  context.fillStyle = 'rgba(0,0,0,1)';
  context.fill();
  context.closePath();


  xPosition += 5;
  xPositionTail = xPosition - particleLength;
  // yPosition += Math.random() * (Math.random() < 0.5 ? -20 : 25)
  // yPosition += noiseGen.scaled([xPosition, 0]);
  // console.log(yPosition);

  if (xPosition > width + 200){
    xPosition = 0;
    yPosition = Math.random() * height;
  }
  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
