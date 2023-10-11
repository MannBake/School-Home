window.addEventListener("scroll", ()=>{
    var backposi = (window.scrollY / window.innerHeight) * 50;
    document.querySelector("#MPB1").style.backgroundPosition = "0% "+backposi+"%"
})