var canvas = document.getElementById('game');
canvas.width = 800;
canvas.height = 400;
var context = canvas.getContext('2d');
context.font = 'italic 50px "Open Sans" sans-serif';
context.fillStyle = '#ee8833';
context.fillText('Hello', 100, 100);

context.strokeStyle = '#000'
context.font = '50px 微软雅黑';
context.strokeText('你好', 150, 150);
//context.fillStyle();