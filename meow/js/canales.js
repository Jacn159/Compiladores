const canales = document.querySelector("[data-canales]");

const mostraro = () => {
  console.log("meow");
  card.style.display = "block";
  mostrarlo.style.display = "none";
  imagen.classList.add("imagen2");
  card.innerHTML = `<div class="card">
      <img src="https://github.com/HerrSopMod.png"><p>Canales Cuellar Jose Luis Santiago</p>
      <div class="redes">
          <ul>
              <li> <a href="https://github.com/FredyPachas" Target="_blank"> Github</a></li>
              <li> <a href="https://www.linkedin.com/" Target="_blank"> Linkedin</a></li>
          </ul>
      </div>
      </div>   `;
};
canales.addEventListener("click", mostraro);

canales.addEventListener("click", mostraro);
