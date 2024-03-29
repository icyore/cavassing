var canvas = document.getElementById('game');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');

function Box (options) {
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.width || 100;
  this.height = options.height || 100;
  this.color = options.color || '#000000'
}

var boxes = [];
var drawing = false;
var boxSize = 20;

document.addEventListener('mousedown', function (e) {
  drawing = true;
});

document.addEventListener('mouseup', function (e) {
  drawing = false;
});

document.addEventListener('mousemove', function (e) {
  if(drawing) {
    boxes[boxes.length] = new Box({
      x: e.clientX - randomNumber(-5,5),
      y: e.clientY - boxSize/2,
      width: boxSize,
      height: boxSize,
      color: '#f4ead5'
    });
  }  
});

function draw () {
  context.clearRect(0, 0, canvas.width, canvas.height);

  boxes.forEach(function(box, i) {
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.width, box.height);
  });
}

function update () {
  boxes.forEach(function(box ,i) {
    if(box.height < 0){
      boxes.shift();
    }
    box.height--;
    box.width--;
  })
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}


function loop () {
  update();
  draw();
  window.requestAnimationFrame(loop);
}

loop();