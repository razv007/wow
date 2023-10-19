let button = document.querySelector(".button-submit");
let buttonText = document.querySelector(".tick");
const tickMark =
  '<svg width="20" height="30 " viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';
inputs = document.getElementsByClassName("input_mail");
var i;
var sir;
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
function validateCod(array) {
  return array.length == 6;
}
function validateNumber(array) {
  return array.length >= 8;
}
buttonText.innerHTML = "Submit";
function correct0() {
  inputs[0].classList.remove("gresit");
}
function correct1() {
  inputs[1].classList.remove("gresit");
}
function correct2() {
  inputs[2].classList.remove("gresit");
}
function correct3() {
  inputs[3].classList.remove("gresit");
}
function correct4() {
  inputs[4].classList.remove("gresit");
}
function correct5() {
  inputs[5].classList.remove("gresit");
}
function correct6() {
  inputs[6].classList.remove("gresit");
}
function correct7() {
  inputs[7].classList.remove("gresit");
}
function sendMail() {
  console.log(cart);
  var frec = [0,0,0,0,0,0,0,0,0,0,0];
  var sir = ["0","0","0","0","0","0","0","0","0","0","0"];
  for (var i in cart) {
    frec[i] = cart[i].count;
  }
  for (i = 0; i <= 10; i++) {
    console.log(frec[i]);
    if (frec[i] == 1) {
      sir[i] =
        cart[i].count +
        " - Produs intitulat '" +
        cart[i].name +
        "' ce costa " +
        cart[i].price*cart[i].count +
        " lei in total.";
    } else if (frec[i] > 1) {
      sir[i] =
        cart[i].count +
        " - Produse intitulate '" +
        cart[i].name +
        "' ce costa " +
        cart[i].price*cart[i].count +
        " lei in total.";
    } else sir[i] = "";
  }
  var params = {
    nume: document.getElementById("nume").value,
    nume2 : document.getElementById("nume").value,
    prenume: document.getElementById("prenume").value,
    email: document.getElementById("email").value,
    judet: document.getElementById("judet").value,
    localitate: document.getElementById("localitate").value,
    adresa: document.getElementById("adresa").value,
    cod: document.getElementById("cod").value,
    telefon: document.getElementById("telefon").value,
    detalii: document.getElementById("detalii").value,
    label:
      document.getElementById("gender")[
        document.getElementById("gender").selectedIndex
      ].innerHTML,
    subtotal: total,
    total: total+aux,
    transport: aux,
    nr_total: nr_total,
    produs0: sir[0],
    produs1: sir[1],
    produs2: sir[2],
    produs3: sir[3],
    produs4: sir[4],
    produs5: sir[5],
    produs6: sir[6],
    produs7: sir[7],
    produs8: sir[8],
    produs9: sir[9],
    produs10: sir[10],
  };
  console.log(document.getElementById("nume").value);
  var nume = document.getElementById("nume").value;
  var prenume = document.getElementById("prenume").value;
  var email = document.getElementById("email").value;
  var judet = document.getElementById("judet").value;
  var localitate = document.getElementById("localitate").value;
  var adresa = document.getElementById("adresa").value;
  var cod = document.getElementById("cod").value;
  var telefon = document.getElementById("telefon").value;
  var label =
    document.getElementById("gender")[
      document.getElementById("gender").selectedIndex
    ].innerHTML;
  console.log(total);
  if (nume == "") {
    inputs[0].classList.add("gresit");
    return;
  }
  if (prenume == "") {
    inputs[1].classList.add("gresit");
    return;
  }
  if (validateEmail(email) == 0) {
    inputs[2].classList.add("gresit");
    return;
  }
  if (judet == "") {
    inputs[3].classList.add("gresit");
    return;
  }
  if (localitate == "") {
    inputs[4].classList.add("gresit");
    return;
  }
  if (adresa == "") {
    inputs[5].classList.add("gresit");
    return;
  }
  if (validateCod(cod) == 0) {
    inputs[6].classList.add("gresit");
    return;
  }
  event.preventDefault();
  if (validateNumber(telefon) == 0) {
    inputs[7].classList.add("gresit");
    return;
  }
  if (label == "Metode de plată:") {
    alert("Nu ati selectat o metoda de plata!");
    return;
  }
  if (total <= 0) {
    alert(
      "Cosul dumneavoastra este gol. Pentru a trimite o comanda trebuie sa adaugati macr un produs"
    );
    return;
  }
  const serviceID = "service_qhxk86g";
  const templateID = "template_lnuxf4r";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("nume").value = "";
      document.getElementById("prenume").value = "";
      document.getElementById("judet").value = "";
      document.getElementById("localitate").value = "";
      document.getElementById("adresa").value = "";
      document.getElementById("cod").value = "";
      document.getElementById("telefon").value = "";
      document.getElementById("email").value = "";
      console.log(res);
      if (buttonText.innerHTML === "Submit") {
        buttonText.innerHTML = tickMark;
      }
      button.classList.add("button__circle");
      button.disabled = true;
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}