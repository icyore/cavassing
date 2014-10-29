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
var keys = {};
var player = new Box({
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  color: '#f4ead5',
  speed: 5
});
var bullets = [];

function input (player) {
  if (37 in keys) {
    player.x -= player.speed;
  }
  if (39 in keys) {
    player.x += player.speed;
  }
  if (38 in keys) {
    player.y -= player.speed;
  }
  if (40 in keys) {
    player.y += player.speed;
  }

  if (32 in keys) {    
    bullets[bullets.length] = new Box({
      x: player.x + player.width / 2,
      y: player.y + player.height / 2,
      width: 4,
      height: 4,
      color: '#e3dc01',
      speed: 10
    });
  }
}

document.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true;
  e.preventDefault();
});

document.addEventListener('keyup', function (e) {
  delete keys[e.keyCode];
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

}

function update () {

}



function loop () {
  update();
  draw();
  window.requestAnimationFrame(loop);
}

loop();