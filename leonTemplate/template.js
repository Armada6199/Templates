let closeButton=document.querySelector(".closeSlide");
let slideShow=document.querySelector(".slidShow");
let burgerButton=document.querySelector(".burger");
burgerButton.addEventListener("click",()=>{
slideShow.classList.add("is-active")
})
closeButton.addEventListener("click",()=>{
  slideShow.classList.toggle("is-active")
  console.log("removed")
    
    })
