//1digito Xletra 1guionbajo
const palabraIngresada = "";

let mostrarPalabra = (palabra) => {
  let letras = palabra.toLowerCase().split("");
  let valor1;
  let valor2;
  for (let i = 0; i < 10; i++) {
    if (letras[0] == i) {
      console.log("Es un digito", i);
      valor1 = true;
      break;
    }
  }
  if (letras[letras.length - 1] == "_") {
    console.log("hay un guion bajo al final: ", "_");
    valor2 = true;
  }
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
    let i = 0;
    letras.pop();
    letras.shift();
    console.log(letras);
    for (const letra of letras) {
      for (const letters of abecedario) {
        if (letra == letters) {
          console.log("encontró la letra", letters, letra);
          break;
        } else {
          i++;
        }
      }
    }
    console.log(i);
  }
};

mostrarPalabra(palabraIngresada);
