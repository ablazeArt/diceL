var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var img1 = "dice" + randomNumber1 + ".png";
var img2 = "dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").style.color = "red";
  document.querySelector("h1").innerHTML = ("ตัวไร้ประโยชน์");
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").style.color = "#FFB319";
  document.querySelector("h1").innerHTML = ("ตัวเหมือนที่จะมีประโยชน์แต่ก็ไม่มีประโยชน์");
}
else {
  document.querySelector("h1").style.color = "#57CC99";
  document.querySelector("h1").innerHTML = ("ตัวที่มีประโยชน์นิดหน่อย");
}
