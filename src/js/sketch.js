import p5 from 'p5';
const bg = '#000'

// var xoff1 = 0;
// var xoff2 = 4;

var inc = 0.01;
var start = 0;

const sketch = (p) => {

  const canvasWidth = p.windowWidth;
  const canvasHeight = p.windowHeight;

  window.p = p;


  p.setup = () => {
    p.createCanvas(400, 400);
  }



  p.draw = () => {
    p.background(bg);
    p.stroke(255)
    p.noFill()
    p.beginShape();
    var xoff = start;
    for (var x = 0; x < p.width; x++) {

      var n = p.map(p.sin(xoff), -1, 1, -50, 50)
      var s = p.map(p.noise(xoff), 0, 1, 0, p.height)
      p.stroke(255)
      xoff+=inc;
      // var y = p.random(height)
      // var y = p.height/2 + p.sin(xoff)*p.height/2
      var y = s + n
      // console.log(y)
      p.vertex(x, y)
    }
    p.endShape();

    start+=inc;
    // var x = p.map(p.noise(xoff1), 0, 1, 0, p.width);
    // var y = p.map(p.noise(xoff2), 0, 1, 0, p.height);

    // p.ellipse(x, y, 24, 24)

    // xoff1+=0.02;
    // xoff2+=0.02;

    // p.noLoop()
  }





  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    p.background(bg);
    p.redraw()
  }


}

new p5(sketch)
