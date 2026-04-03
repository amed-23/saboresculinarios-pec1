console.log('Hello world!');  //Para comprobar dónde me cargan los scripts correctamente

function validateForm() {
  let x = document.forms["subscription"]["policy"].value;
  if (x == "") {
    alert("Acepta la política de privacidad e introduce tu correo electrónico para subscribirte.");
    return false;
  }
}

document.getElementById("subscribir").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("subscribir").innerHTML = "¡Gracias!";
}