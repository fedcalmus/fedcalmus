var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ox = canvas.width / 2;
var oy = canvas.height / 2;
ctx.font = "42px serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#FFF";
ctx.fillText("Hello World", ox, oy);
rotate_ctx = function() {
// translate so that the origin is now (ox, oy) the center of the canvas
    ctx.translate(ox, oy);
// convert degrees to radians with radians = (Math.PI/180)*degrees.
    ctx.rotate((Math.PI / 180) * 15);
    ctx.fillText("Hello World", 0, 0);
// translate back
    ctx.translate(-ox, -oy);
};