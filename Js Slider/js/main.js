var next=document.getElementById("next")
var prev=document.getElementById("prev")
var slider=document.querySelector(".slider ul")
var test=0;
var bar=document.querySelector(".bars")
var rew=document.querySelector(".rew")
rew.onclick=function(){
    document.querySelector(".mainoverlay").classList.remove("overactive")
}
bar.onclick=function(){
    document.querySelector(".mainoverlay").classList.add("overactive")
}
window.onload=function(){
    setInterval(nextSlide,2000)
    document.querySelector(".preloader").remove()
}
function nextSlide(){

    test++;
    (slider.querySelectorAll("li").length+""+test)
    if(test== slider.querySelectorAll("li").length){
        test=0;
    }
    var mes=-(test*800);
slider.style.left=mes+"px"
}
next.onclick=nextSlide
prev.onclick=function(){
    test--;
    (slider.querySelectorAll("li").length+""+test)
    if(test== -1){
        test=slider.querySelectorAll("li").length-1;
        }
    var mes=-(test*800);
slider.style.left=mes+"px"
}

