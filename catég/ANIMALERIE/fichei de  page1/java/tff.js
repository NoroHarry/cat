let A=document.querySelector(".slec1");
let B=document.querySelector(".slec2");
let doc=document.querySelectorAll("div");


let body=document.body;


let SSS=document.querySelectorAll("p")
console.log(B)

if(B.value==="Ar"||A.value==="Ar"){
  body.style.direction="rtl"
  B.value="Ar"
  A.value="Ar"
  if (SSS[1].innerHTML==="Benvenue"){
    SSS[1].innerHTML="مرحباً"
  }

}
if(B.value==="Fr"||A.value==="Ar"){
body.style.direction=""
B.value="Fr"
A.value="Fr"
if (SSS[1].innerHTML==="مرحباً"){
  SSS[1].innerHTML="Benvenue"
}

}
if(B.value==="En"||A.value==="Ar"){
body.style.direction=""
B.value="En"
A.value="En"
if (SSS[1].innerHTML==="مرحباً"){
  SSS[1].innerHTML="Benvenue"
}
};

A.onchange=function(){
    
    if(A.value==="Ar"){
        body.style.direction="rtl"
doc.forEach(function(d){
  d.style.direction="rtl";  })

        B.value="Ar"
        A.value="Ar"
        if (SSS[1].innerHTML==="Benvenue"){
          SSS[1].innerHTML="مرحباً"
        }
      }
      if(A.value==="Fr"){
        body.style.direction=""
        B.value="Fr"
        A.value="Fr"
        if (SSS[1].innerHTML==="مرحباً"){
          SSS[1].innerHTML="Benvenue"
        }
        doc.forEach(function(d){
        d.style.direction="";
  
  })
     }
     if(A.value==="En"){
      body.style.direction=""
      B.value="En"
      A.value="En"
      if (SSS[1].innerHTML==="مرحباً"){
        SSS[1].innerHTML="Benvenue"
      }
        doc.forEach(function(d){
      d.style.direction="";

})}
};



B.onchange=function(){ 
  if(B.value==="Ar"){
      body.style.direction="rtl"
      doc.forEach(function(d){
      d.style.direction="rtl";
      

})
      B.value="Ar"
      A.value="Ar"
      if (SSS[1].innerHTML==="Benvenue"){
        SSS[1].innerHTML="مرحباً"
      }
    }



   if(B.value==="Fr"){
    body.style.direction=""
    doc.forEach(function(d){
      d.style.direction="";
    }) 
    B.value="Fr"
    A.value="Fr"
    if (SSS[1].innerHTML==="مرحباً"){
      SSS[1].innerHTML="Benvenue"
    }
 }


 if(B.value==="En"){
  body.style.direction=""
  B.value="En"
  A.value="En"
  if (SSS[1].innerHTML==="مرحباً"){
    SSS[1].innerHTML="Benvenue"
  }
doc.forEach(function(d){
  d.style.direction="";
})
}
};
var icon =document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "fichei de  page1/logo et imag/dark theme icon/moon.png";
    imgaa.src="fichei de  page1/logo et imag/logo 2.png";
    
  }else{
     icon.src = "fichei de  page1/logo et imag/dark theme icon/sun.png";
     imgaa.src="fichei de  page1/logo et imag/logo1.png";
  }
}


var icon =document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "fichei de  page1/logo et imag/dark theme icon/moon.png";
    imgaa.src="fichei de  page1/logo et imag/logo 2.png";
    
  }else{
     icon.src = "fichei de  page1/logo et imag/dark theme icon/sun.png";
     imgaa.src="fichei de  page1/logo et imag/logo1.png";
  }
}
































// doc.forEach(function(d){
//   d.style.direction="";
// })

// console.log(doc);
// doc.forEach(function(d){
//   d.style.direction="rtl";

// })











// A.onchange=function(){ 
//   if(A.value==="Ar"||B.value==="Ar"){
    
     
//   }
//   else {
   
//   }

// }

// if(B.value==="Ar"||A.value==="Ar"){
//   if (SSS[1].innerHTML==="Benvenue"){
//     SSS[1].innerHTML="مرحباً"
//   }

// }


// console.log(SSS[1])

