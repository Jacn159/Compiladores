const casma = document.querySelector("[data-casma]");
const card = document.querySelector("[data-card]");

const mostrar = () => {
    console.log("meow");
    card.style.display = "block";
    mostrarlo.style.display = "none";
    imagen.classList.add("imagen2");
    card.innerHTML = `<div class="card">
      <img src="https://github.com/Jacn159.png"><p>Casma Nieto Jose Aldahir</p>
      <div class="redes">
          <ul>
              <li> <a href="https://github.com/Jacn159" Target="_blank"> Github</a></li>
              <li> <a href="https://www.linkedin.com/in/josecasmanieto/" Target="_blank"> Linkedin</a></li>
          </ul>
      </div>
      </div>   `;
  };
  casma.addEventListener("click", mostrar);

casma.addEventListener("click", mostrar);
