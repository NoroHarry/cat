var icon =document.getElementById("AAAA");
icon.onclick = function(){
  document.body.classList.toggle("ARAB");
  if(document.body.classList.contains("ARAB")){
    icon.src = "fichei de  page1/logo et imag/dark theme icon/moon.png";
    
  }else{
     icon.src = "fichei de  page1/logo et imag/dark theme icon/sun.png";
     imgaa.src="fichei de  page1/logo et imag/logo1.png";
  }
}