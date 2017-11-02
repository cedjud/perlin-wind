import FastSimplexNoise from 'fast-simplex-noise';

const noiseGen = new FastSimplexNoise({
  frequency: 0.01,
  max: 20,
  min: -20,
  octaves: 1
})

// const noiseGen = new FastSimplexNoise();

const width = 500;
const height = 200;

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

let xPosition = 0;
let yPosition = height / 2;

context.beginPath();
context.moveTo(xPosition, yPosition);

for (let i = 0; i <= width; i += 1){

  // Straight line
  // context.lineTo(xPosition, yPosition);

  // Math.sin()
  // context.lineTo(xPosition, yPosition + Math.sin(i * 0.05) * 20);

  // Using Math.random()
  context.lineTo(xPosition, yPosition + Math.random() * (Math.random() < 0.5 ? -20 : 25) );

  // Using Noise
  // context.lineTo(xPosition, yPosition + noiseGen.scaled([i, 0]));

  xPosition = i;
}

context.stroke();
context.closePath();