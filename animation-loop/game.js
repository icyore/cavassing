var canvas = document.getElementById('game');
canvas.width = 800;
canvas.height = 400;
var ctt = canvas.getContext('2d');

function Box(color) {
	this.x = 10;
	this.y = 10;
	this.width = 100;
	this.height = 100;
	this.color = color;
}
var boxes = [];
var total = 100;
var color = randomColor({count: total});
for (var i = total - 1; i >= 0; i--) {
	boxes[i] = new Box(color[i]);
};
function loop() {
	draw();
	requestAnimationFrame(loop);
}

function draw() {
	update();
	ctt.clearRect(0, 0, canvas.width, canvas.height);
	boxes.forEach(function(box, i){
		ctt.fillStyle = box.color;
		ctt.fillRect(box.x, box.y, box.width, box.height);
	});

}

function update() {
	boxes.forEach(function(box, i) {
		box.x += randomNumber(-5, 5);
    	box.y += randomNumber(-5, 5);
	});
}

function randomNumber(min, max) {
	return Math.round(Math.random()*(max - min + 1) +min);
}

loop();
// var canvas = document.getElementById('game');
// canvas.width = 1000;
// canvas.height = 500;
// var context = canvas.getContext('2d');

// function Box () {
//   this.x = 10;
//   this.y = 10;
//   this.width = 100;
//   this.height = 100;
// }

// var boxes = [];
// var totalBoxes = 100;

// for (var i=0; i<totalBoxes; i++) {
//   boxes[i] = new Box();
//   boxes[i].color = randomColor(0, 255, 0, 255, 0, 255, .5);
// }

// function draw () {
//   context.clearRect(0, 0, canvas.width, canvas.height);

//   boxes.forEach(function(box, i) {
//     context.fillStyle = box.color;
//     context.fillRect(box.x, box.y, box.width, box.height);
//   });
// }

// function update () {
//   boxes.forEach(function(box, i) {
//     box.x += randomNumber(-5, 5);
//     box.y += randomNumber(-5, 5);
//   });
// }

// function randomNumber(min, max) {
//   return Math.round(Math.random() * (max - min + 1) + min);
// }

// function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha){
//   var r = randomNumber(rmin, rmax);
//   var g = randomNumber(gmin, gmax);
//   var b = randomNumber(bmin, bmax);
//   return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
// }

// function loop () {
//   update();
//   draw();
//   window.requestAnimationFrame(loop);
// }

// loop();