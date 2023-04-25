import React, { useState } from "react";
import Cards from "../../components/cards";
import "./header.css";

const Header = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const [cardData, setCardData] = useState({
    imagen: "",
    nombre: "",
    github: "",
    linkedin: "",
  });

  const showCard = (imagen, nombre, github, linkedin) => {
    setCardData({
      imagen: imagen,
      nombre: nombre,
      github: github,
      linkedin: linkedin,
    });
    setCardVisible(true);
  };

  const hideCard = () => {
    setCardVisible(false);
  };

  return (
    <header className="Header">
      <img className="logo" src="/src/assets/logo.png" alt="" />
      <nav>
        <ul className="menu">
          <li className="mostrar" onClick={() => showCard("https://github.com/Jacn159.png", "Casma Nieto Jose Aldahir", "https://github.com/FredyPachas", "https://www.linkedin.com/")}>
            Casma
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/FredyPachas.png", "Pachas Napa Fredy Johan", "https://github.com/example", "https://www.linkedin.com/in/example")}>
            Pachas?
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/HerrSopMod.png", "Canales Cuellar Jose Luis Santiago", "https://github.com/another-example", "https://www.linkedin.com/in/another-example")}>
            Canales
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/Jesus1905.png", "Magallanes Tasayco Jesus Antonio", "https://github.com/last-example", "https://www.linkedin.com/in/last-example")}>
            Magallanes
          </li>
        </ul>
      </nav>
      {cardVisible ? (
        <div className="overlay" onClick={hideCard}>
          <Cards
            imagen={cardData.imagen}
            nombre={cardData.nombre}
            github={cardData.github}
            linkedin={cardData.linkedin}
          />
        </div>
      ) : (
        <div className="buscador">
          <div className="imagen">
            <img src="/src/assets/buscador.png" alt="" />
          </div>
          <p className="nofound">Selecciona un integrante</p>
        </div>
      )}
    </header>
  );
};

export default Header;
