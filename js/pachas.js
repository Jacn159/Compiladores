const pachas = document.querySelector("[data-pachas]");

const mostrarp = () => {
    console.log("meow");
    card.style.display = "block";
    mostrarlo.style.display = "none";
    imagen.classList.add("imagen2");
    card.innerHTML = `<div class="card">
      <img src="https://github.com/FredyPachas.png"><p>Pachas Napa Fredy Johan</p>
      <div class="redes">
          <ul>
              <li> <a href="https://github.com/FredyPachas" Target="_blank"> Github</a></li>
              <li> <a href="https://www.linkedin.com" Target="_blank"> Linkedin</a></li>
          </ul>
      </div>
      </div>   `;
  };
  pachas.addEventListener("click", mostrarp);

pachas.addEventListener("click", mostrarp);
