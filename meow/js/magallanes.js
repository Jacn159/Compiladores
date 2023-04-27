const magallanes = document.querySelector("[data-magallanes]");

const mostrary = () => {
    console.log("meow");
    card.style.display = "block";
    mostrarlo.style.display = "none";
    imagen.classList.add("imagen2");
    card.innerHTML = `<div class="card">
      <img src="https://github.com/Jesus1905.png"><p>Magallanes Tasayco Jesus Antonio</p>
      <div class="redes">
          <ul>
              <li> <a href="https://github.com/Jesus1905" Target="_blank"> Github</a></li>
              <li> <a href="https://www.linkedin.com" Target="_blank"> Linkedin</a></li>
          </ul>
      </div>
      </div>   `;
  };
  magallanes.addEventListener("click", mostrary);

magallanes.addEventListener("click", mostrary);
