window.addEventListener("scroll", ()=>{
    Document.querySelector(".ProgressBar").style.transform = "scaleY(" + (window.innerHeight * 3) / window.scrollY + ")"
});