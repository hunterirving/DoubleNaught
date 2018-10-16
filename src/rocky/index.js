var rocky = require('rocky');

//initialize watchface
var d = new Date();
var timeString = d.toLocaleTimeString()
var hmsArray = timeString.split(":")
var timeInSeconds = (parseInt(hmsArray[0]*3600) + parseInt(hmsArray[1]*60) + parseInt(hmsArray[2]*1))
var currentTimeInCentiDays = parseInt(timeInSeconds / 864)
rocky.requestDraw();

rocky.on('draw', function(event) {
  var ctx = event.context;

  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  var offsetY = (ctx.canvas.clientHeight - ctx.canvas.unobstructedHeight) / 2;
  var centerX = ctx.canvas.unobstructedWidth / 2;

  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.font = '26px bold Leco-numbers-am-pm';
  ctx.fillText(currentTimeInCentiDays, centerX, (66 - offsetY));

});

rocky.on('secondchange', function(event) {

  var d = new Date();
  var timeString = d.toLocaleTimeString();
  var hmsArray = timeString.split(":");
  var timeInSeconds = (parseInt(hmsArray[0]*3600) + parseInt(hmsArray[1]*60) + parseInt(hmsArray[2]));
  //console.log("currentTimeInCentiDays: " + currentTimeInCentiDays);
  if(timeInSeconds % 864 == 0)
  {
    currentTimeInCentiDays = timeInSeconds / 864
    console.log("one centiDay has elapsed: " + currentTimeInCentiDays)

    rocky.requestDraw();
  }
});
