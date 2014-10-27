var canvas = document.getElementById('game');
canvas.width = 800;
canvas.height = 400;
var context = canvas.getContext('2d');
context.font = 'italic 50px Georgia sans-serif';
context.fillStyle = '#ee8833';
context.fillText('Hello', 100, 100);

context.strokeStyle = '#000'
context.font = '50px sans-serif';
context.strokeText('hello', 150, 150);
//context.fillStyle();