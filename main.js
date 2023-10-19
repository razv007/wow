let mixerProdus1=mixitup('.shop_container1', {
    selectors: {
        target: '.shop_card'
    },
    animation:{
        duration: 300
    }
});
let mixerProdus2=mixitup('.shop_container2', {
    selectors: {
        target: '.shop_card'
    },
    animation:{
        duration: 300
    }
});
let mixerProdus3=mixitup('.shop_container3', {
    selectors: {
        target: '.shop_card'
    },
    animation:{
        duration: 300
    }
});
let mixerProdus4=mixitup('.shop_container4', {
    selectors: {
        target: '.shop_card'
    },
    animation:{
        duration: 300
    }
});

const filtre = document.getElementsByClassName("filtru");
const biologie = document.getElementById("biologie");
const chimie = document.getElementById("chimie");
const fizica = document.getElementById("fizica");
const accesorii = document.getElementById("accesorii");
const cos = document.getElementById("tray");
const shop_filter = document.getElementsByClassName("shop_filters2");
const produs_popup_shop = document.getElementsByClassName("produs_popup_shop");
const produs_popup = document.getElementsByClassName("produs_popup");
const close_shop = document.getElementsByClassName("shop_produs_popup-close");
const shopping_cart =document.getElementsByClassName("shopping-cart");
const produs_description =document.getElementsByClassName("produs_popup-inner");
var ok=0;
var ok2=1;
console.log(filtre);
console.log(linkshop);
filtre[0].addEventListener('click', function () {
    console.log("wow");
    biologie.classList.add('active_filtru');
    chimie.classList.add('disable_filtru');
    fizica.classList.add('disable_filtru');
    accesorii.classList.add('disable_filtru');
    biologie.classList.remove('disable_filtru');
    chimie.classList.remove('active_filtru');
    fizica.classList.remove('active_filtru');
    accesorii.classList.remove('active_filtru');
    filtre[0].classList.add('active_shop');
    filtre[1].classList.add('disable_shop');
    filtre[2].classList.add('disable_shop');
    filtre[3].classList.add('disable_shop');
    filtre[0].classList.remove('disable_shop');
    filtre[1].classList.remove('active_shop');
    filtre[2].classList.remove('active_shop');
    filtre[3].classList.remove('active_shop');
    shop_filter[0].style.backgroundColor="#2974ad76";
  }, false);

  filtre[1].addEventListener('click', function () {
    chimie.classList.add('active_filtru');
    biologie.classList.add('disable_filtru');
    fizica.classList.add('disable_filtru');
    accesorii.classList.add('disable_filtru');
    chimie.classList.remove('disable_filtru');
    biologie.classList.remove('active_filtru');
    fizica.classList.remove('active_filtru');
    accesorii.classList.remove('active_filtru');
    filtre[1].classList.add('active_shop');
    filtre[0].classList.add('disable_shop');
    filtre[2].classList.add('disable_shop');
    filtre[3].classList.add('disable_shop');
    filtre[1].classList.remove('disable_shop');
    filtre[0].classList.remove('active_shop');
    filtre[2].classList.remove('active_shop');
    filtre[3].classList.remove('active_shop');
    shop_filter[0].style.backgroundColor="#7d13bf69";
  }, false);

  filtre[2].addEventListener('click', function () {
    fizica.classList.add('active_filtru');
    chimie.classList.add('disable_filtru');
    biologie.classList.add('disable_filtru');
    accesorii.classList.add('disable_filtru');
    fizica.classList.remove('disable_filtru');
    chimie.classList.remove('active_filtru');
    biologie.classList.remove('active_filtru');
    accesorii.classList.remove('active_filtru');
    filtre[2].classList.add('active_shop');
    filtre[1].classList.add('disable_shop');
    filtre[0].classList.add('disable_shop');
    filtre[3].classList.add('disable_shop');
    filtre[2].classList.remove('disable_shop');
    filtre[1].classList.remove('active_shop');
    filtre[0].classList.remove('active_shop');
    filtre[3].classList.remove('active_shop');
    shop_filter[0].style.backgroundColor="#0bc47488";
  }, false);

  filtre[3].addEventListener('click', function () {
    fizica.classList.add('disable_filtru');
    chimie.classList.add('disable_filtru');
    biologie.classList.add('disable_filtru');
    accesorii.classList.add('active_filtru');
    fizica.classList.remove('active_filtru');
    chimie.classList.remove('active_filtru');
    biologie.classList.remove('active_filtru');
    accesorii.classList.remove('disable_filtru');
    filtre[2].classList.add('disable_shop');
    filtre[1].classList.add('disable_shop');
    filtre[0].classList.add('disable_shop');
    filtre[3].classList.add('active_shop');
    filtre[2].classList.remove('active_shop');
    filtre[1].classList.remove('active_shop');
    filtre[0].classList.remove('active_shop');
    filtre[3].classList.remove('disable_shop');
    shop_filter[0].style.backgroundColor="#f09f0888";
  }, false);

  linkshop[0].addEventListener('click', function () {
    linkshop[0].classList.add('active_shop');
    linkshop[1].classList.add('disable_shop');
    linkshop[2].classList.add('disable_shop');
    linkshop[0].classList.remove('disable_shop');
    linkshop[1].classList.remove('active_shop');
    linkshop[2].classList.remove('active_shop');
  }, false);

  linkshop[1].addEventListener('click', function () {
    linkshop[1].classList.add('active_shop');
    linkshop[0].classList.add('disable_shop');
    linkshop[2].classList.add('disable_shop');
    linkshop[1].classList.remove('disable_shop');
    linkshop[0].classList.remove('active_shop');
    linkshop[2].classList.remove('active_shop');
  }, false);

  linkshop[2].addEventListener('click', function () {
    linkshop[2].classList.add('active_shop');
    linkshop[1].classList.add('disable_shop');
    linkshop[0].classList.add('disable_shop');
    linkshop[2].classList.remove('disable_shop');
    linkshop[1].classList.remove('active_shop');
    linkshop[0].classList.remove('active_shop');
  }, false);


document.addEventListener("click", (e) => {
    if(e.target.classList.contains("shop_img")) {
        toggleProdusPopup();
        produsItemDetails(e.target.parentElement);
    }
})

cos.addEventListener('click', function(){
    document.querySelector(".produs_popup_shop").classList.add("open");
},false);

shopping_cart[0].addEventListener('click', function(){
    ok=1;
},false);
produs_popup_shop[0].addEventListener('click', function(){
    console.log(ok);
    if(ok==0)
    {
        document.querySelector(".produs_popup_shop").classList.remove("open");
    }
    else
    {
        ok=0;
    }
},false);
produs_description[0].addEventListener('click', function(){
    ok2=1;
},false);
produs_popup[0].addEventListener('click', function(){
    if(ok2==0)
    {
        document.querySelector(".produs_popup").classList.remove("open");
    }
    else
    {
        ok2=0;
    }
},false);

function toggleProdusPopup() {
    document.querySelector(".produs_popup").classList.toggle("open");
}

document.querySelector(".produs_popup-close").addEventListener("click", toggleProdusPopup);

close_shop[0].addEventListener('click', function(){
    document.querySelector(".produs_popup_shop").classList.remove("open");
},false);


function produsItemDetails(produsItem) {
    document.querySelector(".pp_thumbnail img").src = produsItem.querySelector(".shop_img").src;
    document.querySelector(".produs_popup-body").innerHTML = produsItem.querySelector(".produs_item-details").innerHTML;
}