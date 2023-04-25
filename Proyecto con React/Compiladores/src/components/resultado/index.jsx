import React from "react";
import "./resultado.css";
const Resultado = (props) => {
  return (
    <div className="resultado" style={{display:props.aparecer}}>
      <h1> {props.mostrar}</h1>
    </div>
  );
};

export default Resultado;
