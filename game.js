var jumps = 0;
var score = 0;
var block = document.getElementById("block");
var gap = document.getElementById("gap");
var dot = document.getElementById("dot");

function jump()
{
  jumps = 1;
  let n = 0;
  var jumpInterval = setInterval(function()
  {
    var dotTop = parseInt(window.getComputedStyle(dot).getPropertyValue("top"));
    if((n < 15) && (dotTop > 6))
    {
      dot.style.top = (dotTop - 5) + "px";
    }
    if(n > 20)
    {
      clearInterval(jumpInterval);
      jumps = 0;
      n = 0;
    }
    n = n + 1;
  },10);
}

setInterval(function()
{
  var dotTop = parseInt(window.getComputedStyle(dot).getPropertyValue("top"));
  if(jumps == 0)
  {
    dot.style.top = (dotTop + 3) + "px";
  }
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
  var dTop = -(500 - dotTop);
  if((dotTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((dTop < gapTop) || (dTop > gapTop + 130))))
  {
    alert("GAME OVER! Score: " + (score - 1));
    dot.style.top = 100 + "px";
    score = 0;
  }
},10);

gap.addEventListener('animationiteration', () =>
{
  var math = -((Math.random() * 300) + 150);
  gap.style.top = math + "px";
  score = score + 1;
});
