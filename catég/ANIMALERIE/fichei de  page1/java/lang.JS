

const transltions={
    Fr:{
        Englais:"Englais",
        Arabe:"Arabe", 
        Français:" Français",
    },
    Ar:{
        Cherchez_un_produit:"إنجليزي",
        Afghanistan:"إنجليزي",
        Englais:"إنجليزي",
        Français:" فرنسي",
        Arabe:"العربية", 
      

        
    },
    En:{
        home:"english",
        youssef:"english",
        Englais:"English",
        Arabe:"Arabe",
        Français:" Français",

    },



};
const languageSelecctor = document.querySelector("select");




languageSelecctor.addEventListener("change",(event) =>{
setLanguage(event.target.value);
});

const setLanguage=(Language) =>{
const elements=document.querySelectorAll("[data-li18] ");

console.log(elements);
elements.forEach((element) => {
 const  translationkey = element.getAttribute("data-li18");
element.textContent = transltions[Language][translationkey];
});
};
