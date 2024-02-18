let yesBtn = document.getElementById("btn-1");
let noBtn = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

yesBtn.addEventListener("click", function () {
    document.getElementsByClassName("btn-container")[0].style.display = "none";
    document.getElementsByClassName("sub-container")[0].style.padding = "0 0 110px 0";
    document.getElementsByTagName("h1")[0].innerText = "No kar bhi nhi sakty";
    document.getElementsByTagName("h1")[0].style.marginTop = "80px";
    document.getElementById("btn-3").style.display = "inline";
});

btn3.addEventListener("click", function () {
    document.getElementsByClassName("btn-container")[0].style.display = "flex";
    document.getElementsByClassName("sub-container")[0].style.padding = "50px 0 60px 0";
    document.getElementsByTagName("h1")[0].innerText = "Do you like me?";
    document.getElementsByTagName("h1")[0].style.marginTop = "auto";
    document.getElementById("btn-3").style.display = "none";
    noBtn.style.position = "static";
    noBtn.style.top = "auto";
    noBtn.style.left = "auto";
    noBtn.style.bottom = "auto";
});

noBtn.addEventListener("mouseover", function(){
    noBtn.style.position = "relative";
    noBtn.style.right = Math.floor(Math.random()*12*10)+"px";
    noBtn.style.bottom = Math.floor(Math.random()*12*10)+"px";
});

noBtn.addEventListener("click", function(){
    noBtn.style.position = "relative";
    noBtn.style.right = Math.floor(Math.random()*12*10)+"px";
    noBtn.style.bottom = Math.floor(Math.random()*12*10)+"px";
});

