import p from 'p5';

const sketch = (p) => {

  const canvasWidth = p.windowWidth;
  const canvasHeight = p.windowHeight;

  window.p = p;



  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight)
    p.background(255, 255, 255);
  }

  p.draw = () => {
      p.circle(30, 30, 20);
  }



}

new p(sketch)
