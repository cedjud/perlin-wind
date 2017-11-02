import perlin from 'perlin-noise';
import FastSimplexNoise from 'fast-simplex-noise';

const noiseGen = new FastSimplexNoise({
  frequency: 1,
  max: 2,
  min: 0,
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

let j = 0;
const setup = () => {}

const draw = () => {
  j++;
  // context.clearRect(0, 0, width, height);

  // context.beginPath();
  // context.moveTo(xPosition, yPosition);
  // for (let i = 0; i <= width / 2; i += 1){
  //   context.lineTo(xPosition, yPosition + Math.random() * 20);
  //   context.stroke();
  //   xPosition += 2;
  // }
  // context.closePath();
  // xPosition = 0;

  context.beginPath();
  context.moveTo(xPosition, yPosition);
  // for (let i = 0; i <= width / 2; i += 1){
    // context.lineTo(xPosition, yPosition + perlin.generatePerlinNoise(xPosition, 480));


  // yPosition += noiseGen.scaled([xPosition, j]);
  yPosition += noiseGen.scaled();
  xPosition += 1;

  context.lineTo(xPosition, yPosition);
  // }
  // console.log(perlin.generatePerlinNoise(xPosition, 480));
  context.stroke();
  context.closePath();

  if (xPosition > width){
    xPosition = 0;
    // context.clearRect(0, 0, width, height);
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
