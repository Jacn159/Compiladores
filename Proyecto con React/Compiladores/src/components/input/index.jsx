import { useState } from "react";
import CampoTexto from "../campoTexto";
const Input = () => {
 const [palabra, setPalabra] = useState("");

 const manejarEnvios = (evento) =>{
    evento.preventDefault();
    // let datosAEnviar = {
    //     palabra: palabra
    // }
    // console.log(datosAEnviar);
 }
  return (
    <div>
      <form onSubmit={manejarEnvios}>
        <CampoTexto  valor={palabra} actualizarValor={setPalabra}/>
      </form>
    </div>
  );
};

export default Input;
