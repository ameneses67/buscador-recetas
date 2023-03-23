import { selectInput } from "./selectores";

selectInput.addEventListener("change", seleccionarCategoria);

function seleccionarCategoria(e: Event) {
  const categoria = (e.target as HTMLSelectElement).value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado.meals));
}
