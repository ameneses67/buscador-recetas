import { Ireceta, mostrarRecetaModal } from "./mostrarRecetaModal";

export function seleccionarReceta(id: string) {
  const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  fetch(url)
    .then((respuesta): Promise<{ meals: Ireceta[] }> => respuesta.json())
    .then((resultado) => mostrarRecetaModal(resultado.meals[0]));
}
