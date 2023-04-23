//1digito Xletra 1guionbajo
const palabraIngresada = "1cana5555les_";

let mostrarPalabra = (palabra) => {
  let letras = palabra.toLowerCase().split("");
  let valor1 = false;
  let valor2 = false;
  let valor3 = true;
  for (let i = 0; i < 10; i++) {
    if (letras[0] == i) {
      valor1 = true;
      break;
    }
  }
  if (letras[letras.length - 1] == "_") {
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
    letras.pop();
    letras.shift();
    let aux = true;
    //1c_
    if (letras.length > 0) {
      for (const letra of letras) {
        if (aux) {
          //cb c5
          for (const letters of abecedario) {
            if (letra == letters) {
              //   console.log("encontró la letra", letters, letra);
              aux = true;
              valor3=true;
              break;
            } else {
              // console.log("no cumple");
              aux = false;
              valor3 = false;
            }
          }
        }
      }
      const mensaje =valor3 ? "Cumple" : "No cumple";
      console.log(mensaje , palabra);
    } else console.log("No cumple", palabra);
  } else console.log("no cumple con los requerimientos", palabra);
};

mostrarPalabra(palabraIngresada);
