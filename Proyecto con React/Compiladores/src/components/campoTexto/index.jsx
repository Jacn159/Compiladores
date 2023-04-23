import "./campoTexto.css";
import React, { useState } from "react";
const campoTexto = (props) => {
  const [resultado, setResultado] = useState(""); // añadido useState para almacenar el resultado

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };


  const compilador = () => {
    const palabraIngresada = props.valor;
    let letras = palabraIngresada.toLowerCase().split("");

    let primerDigito = (letras) => {
      for (let i = 0; i < 10; i++) {
        if (letras[0] == i) return true;
      }
    };

    let ultimoGuion = (letras) => letras[letras.length - 1] == "_";
    let mostrarPalabra = (valor1, valor2, valor3, letras, palabra) => {
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
          const mensajeFinal = mensaje + palabra;
          setResultado(mensajeFinal); // asignar el resultado al estado
        } else {
          const mensajeFinal =
            "No cumple, porque no tiene letras en medio " + palabra;
          setResultado(mensajeFinal); // asignar el resultado al estado
        }
      } else {
        const mensajeFinal =
          "No cumple con los requerimientos, porque necesita un digito al inicio o un guion bajo al final " +
          palabra;
        setResultado(mensajeFinal); // asignar el resultado al estado
      }
    };
    mostrarPalabra(
      primerDigito(letras),
      ultimoGuion(letras),
      true,
      letras,
      palabraIngresada
    );
  };

  return (
    <div className="campo-texto">
      <label>Ingresa tu palabra</label>
      <input type="text" value={props.valor} onChange={manejarCambio} />
      <button className="boton" onClick={compilador}>
        Verificar
      </button>
      <h1>{resultado}</h1>
    </div>
  );
};

export default campoTexto;
