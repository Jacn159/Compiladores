//1digito Xletra 1guionbajo
const submit = document.querySelector("[data-submit]");
const mostrarlo = document.querySelector("[data-respuesta]");


let recogerValor= ((e)=>{
  e.preventDefault();
  const palabraIngresada = document.querySelector("[data-texto]");
  let letras = palabraIngresada.value.toLowerCase().split("");
  const mensajeFinal =mostrarPalabra(primerDigito(letras), ultimoGuion(letras), true,letras, palabraIngresada.value);
  mostrarlo.innerHTML = `<h2> ${mensajeFinal} </h2>`;
  mostrarlo.className ="meow";
});

submit.addEventListener('click', recogerValor);

let primerDigito = (letras) => {
  for (let i = 0; i < 10; i++) {
    if (letras[0] == i) return true;
    
  }
};

let ultimoGuion = (letras) => letras[letras.length - 1] == "_";

let mostrarPalabra = (valor1, valor2, valor3,letras, palabra) => {
  let abecedario = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (valor1 == true && valor2 == true) {
    letras.pop();
    letras.shift();
    let aux = true;
    if (letras.length > 0) {
      for (const letra of letras) {
        if (aux)
          for (const letters of abecedario) {
            if (letra == letters) {
              aux = true;
              valor3 = true;
              break;
            } else {
              aux = false;
              valor3 = false;
            }
          }
      }
      const mensaje = valor3 ? "Cumple " : "No cumple ";
      return mensaje + palabra;
    } else return("No cumple, porque no tiene letras en medio "+ palabra);
  } else
    return(
      "No cumple con los requerimientos, porque necesita un digito al inicio o un guion bajo al final "+
      palabra
    );
};


