const inputNumber = document.querySelector(".input");
const formulario = document.querySelector(".form");
const cardContainer = document.querySelector(".card-container");
const mensaje = document.querySelector(".mensaje");

//Funcion html
const createTempleatePokemon = (dataPokemon) => {
  const { name, types, height, weight, sprites } = dataPokemon;

  return `
        <h2 class="name_pokemon">${name}</h2>
        <img src="${
          sprites.other.home.front_default
        }" alt="" class = "img_pokemon">
        <div class= 'card_info'>
        <span>Tipo: ${types[0].type.name}</span>
        <span>Altura: ${height / 10} mts.</span>
        <span>Peso: ${weight / 10} Kg.</span>
        </div>
        `;
};

//Funcion para renderizar
const renderPokemon = (dataPokemon) => {
  cardContainer.innerHTML = createTempleatePokemon(dataPokemon);
};

const buscarPokemon = async (e) => {
  e.preventDefault();
  const valorInput = inputNumber.value;

  if (valorInput.length === 0) {
    mensaje.innerHTML = "Ingrese un numero por favor";
    return;
  }

  const fetchedPokemon = await requestPokemon(valorInput);

  if (!fetchedPokemon.id) {
    mensaje.innerHTML = `El pokemon ${valorInput} no existe`;
    cardContainer.innerHTML = "";
    formulario.reset();
    return;
  }
  renderPokemon(fetchedPokemon);
  formulario.reset()
};

const init = () => {
  formulario.addEventListener("submit", buscarPokemon);
};

init();
