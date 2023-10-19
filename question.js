var raspunsuri_corecte = 0;
var corect1 = document.getElementById("one-a");
var corect2 = document.getElementById("two-c");
var corect3 = document.getElementById("three-c");
var corect4 = document.getElementById("four-d");
var corect5 = document.getElementById("five-a");
var corect6 = document.getElementById("six-b");
var corect7 = document.getElementById("seven-d");
var corect8 = document.getElementById("eight-b");
var corect9 = document.getElementById("nine-a");
var numar_corecte=document.getElementById("numar_corecte").innerHTML;
const linkshop = document.querySelectorAll(".shop_item");

function activeshop() {
  linkshop.forEach((l) => l.classList.remove("active_shop"));
  this.classList.add("active_shop");
}
linkshop.forEach((l) => l.addEventListener("click", activeshop));
console.log(numar_corecte.value);
function fire()
{
  let canvas = document.createElement("canvas");
        canvas.width = 2000;
        canvas.height = 2000;
        let container = document.getElementsByClassName("button-wrapper")[0];
        container.appendChild(canvas);

        let confetti_button = confetti.create(canvas);
        confetti_button({
        particleCount: 200,
        spread: 600,
        startVelocity: 15,
        scalar: 0.9,
        ticks: 90
        }).then(() => container.removeChild(canvas));
}
function culoare()
{
    if(raspunsuri_corecte==0)
    {
        document.getElementById("score-counter").style.backgroundColor = "crimson";
        numar_corecte=document.getElementById("numar_corecte").innerHTML=0;
    }
    else
    if(raspunsuri_corecte==1)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=1;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#fd5c01";
    }
    else
    if(raspunsuri_corecte==2)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=2;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#ff8704";
    }
    else
    if(raspunsuri_corecte==3)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=3;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#fdcd00";
    }
    else
    if(raspunsuri_corecte==4)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=4;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#fdec00";
    }
    else
    if(raspunsuri_corecte==5)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=5;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#dffe00";
    }
    else
    if(raspunsuri_corecte==6)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=6;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#b3ff00";
    }
    else
    if(raspunsuri_corecte==7)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=7;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#71fe00";
    }   
    else
    if(raspunsuri_corecte==8)
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=8;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#2cfe00";
    }
    else
    {
        numar_corecte=document.getElementById("numar_corecte").innerHTML=9;
        fire();
        document.getElementById("score-counter").style.backgroundColor = "#74c365";
    }
}
culoare();

corect1.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect2.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect3.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect4.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect5.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);
  
  corect6.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect7.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect8.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);

  corect9.addEventListener('click', function () {
    raspunsuri_corecte++;
    culoare();
    console.log(raspunsuri_corecte);
  }, false);
