let copyicon= document.getElementById("copy-icon")
function randomColor(){
 let randcode = Math.floor(Math.random()*16777215)
 let rancolor =  "#"+randcode.toString(16);
 document.body.style.backgroundColor = rancolor
  document.getElementById("colorCode").innerHTML = rancolor;

  navigator.clipboard.writeText(rancolor) //this is for copy the hexCode
 }

