let button = document.querySelector('.button-submit');
let buttonText = document.querySelector('.tick');
const tickMark = "<svg width=\"20\" height=\"30 \" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
inputs = document.getElementsByTagName('input');
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
  function validateCod(array) {
    return array.length==6;
  }
  function validateNumber(array) {
    return array.length==6;
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
  var params = {
    nume : document.getElementById("nume").value,
    prenume : document.getElementById("prenume").value,
    email : document.getElementById("email").value,
    judet : document.getElementById("judet").value,
    localitate : document.getElementById("localitate").value,
    adresa : document.getElementById("adresa").value,
    cod : document.getElementById("cod").value,
    telefon : document.getElementById("telefon").value,
    label : document.getElementById('gender')[document.getElementById('gender').selectedIndex].innerHTML
  };
  console.log("wow");
  var nume = document.getElementById("nume").value;
  var prenume = document.getElementById("prenume").value;
  var email = document.getElementById("email").value;
  var judet = document.getElementById("judet").value;
  var localitate = document.getElementById("localitate").value;
  var adresa = document.getElementById("adresa").value;
  var cod = document.getElementById("cod").value;
  var telefon = document.getElementById("telefon").value;
  var label = document.getElementById('gender')[document.getElementById('gender').selectedIndex].innerHTML;
  if (nume == "") {
    inputs[0].classList.add("gresit");
    return
  }
  if (prenume == "") {
    inputs[1].classList.add("gresit");
    return
  }
  if (validateEmail(email) == 0) {
    inputs[2].classList.add("gresit");
    return
  }
  if (judet == "") {
    inputs[3].classList.add("gresit");
    return
  }
  if (localitate == "") {
    inputs[4].classList.add("gresit");
    return
  }
  if (adresa == "") {
    inputs[5].classList.add("gresit");
    return
  }
  if (validateCod(cod) == 0) {
    inputs[6].classList.add("gresit");
    return
  }
  event.preventDefault();
  if (validateNumber(telefon) == 0) {
    inputs[7].classList.add("gresit");
    return
  }
  if (label == "Metode de plata:") {
    alert("Nu ati selectat o metoda de plata!");
    return
  }
  const serviceID = "service_y6lcgth";
  const templateID = "template_lnuxf4r";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("nume").value = "";
      document.getElementById("prenume").value = "";
      document.getElementById("judet").value = "";
      document.getElementById("localitate").value = "";
      document.getElementById("adresa").value = "";
      document.getElementById("cod").value = "";
      document.getElementById("telefon").value = "";
      console.log(res);
      if (buttonText.innerHTML === "Submit") {
        buttonText.innerHTML = tickMark;
      }
      button.classList.add('button__circle');
      button.disabled = true;
      alert("Your message sent successfully!!")

    })
    .catch(err => console.log(err));

}
var total=2;
document.getElementById("total").innerHTML=total;

