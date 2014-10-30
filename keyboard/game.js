var canvas = document.getElementById('game');
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;
var context = canvas.getContext('2d');

var keys = {};

window.addEventListener('keydown', function (e){
  keys[e.keyCode] = true;
  e.preventDefault();
}, false);

window.addEventListener('keyup', function (e) {
  delete keys[e.keyCode];
}, false);

var player = new Box({
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  color: '#E39B5F',
  speed: 5
});
var bullets = [];

function Box (options) {
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.width || 100;
  this.height = options.height || 100;
  this.speed = options.speed || 5;
  this.color = options.color || '#000000';
}

function input (player) {
  if(37 in keys) {
    player.x -= player.speed;
  }
  if(39 in keys) {
    player.x += player.speed;
  }
  if(38 in keys) {
    player.y -= player.speed;
  }
  if(40 in keys) {
    player.y += player.speed;
  }
  for(var x in keys) {
    bullets.push(new Box({
      x: player.x + player.width/2,
      y: player.y + player.height/2,
      width: 4,
      height: 4,
      color: randomColor(),
      speed: 10
    }));
    if(bullets.length > 50) {
      bullets.shift();
    }
  }
  
}

function boundaries (box) {
  if(box.x <= 0) {
    box.x = 0;
  }
  if(box.x + box.width >= canvas.width) {
    box.x = canvas.width - box.width;
  }
  if(box.y <= 0) {
    box.y =0;
  }
  if(box.y + box.height >= canvas.height) {
    box.y = canvas.height - box.height;
  }
}

function drawBox (box) {
  context.fillStyle = box.color;
  context.fillRect(box.x, box.y, box.width, box.height);
}

function update () {
  input(player);
  boundaries(player);
}

function draw () {
  context.clearRect(0, 0, canvas.width,canvas.height);
  drawBox(player);
  bullets.forEach(function (b) {
    drawBox(b);
  });
}

function loop () {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();