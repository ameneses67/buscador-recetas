export function obtenerCategorias() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => extraerCategorias(resultado.categories));
}

export const selectCategorias: string[] = [];

function extraerCategorias(categorias: { strCategory: string }[]) {
  categorias.map((categoria) => selectCategorias.push(categoria.strCategory));
}
