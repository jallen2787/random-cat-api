const url = "https://api.thecatapi.com/v1/images/search";
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const { id } = e.target.elements;

  fetch(`${url}/${id.value}`)
    .then((res) => res.json())
    .then((data) => {
      displayCharacters(data);
    })
    .catch((err) => console.log("oops something went wrong", err));
}

function displayCharacters(character) {
  const characterHTML = `
  <div>
    <h1>${character.name}</h1>
    <p>Hair color: ${character.hair_color}</p>
    <p>Height: ${character.height}</p>
  </div>
  `;

  container.insertAdjacentHTML("beforeend", characterHTML);
}