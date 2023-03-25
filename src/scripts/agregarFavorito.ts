import type { Ireceta } from "./mostrarRecetaModal";

export function agregarFavorito(receta: Ireceta) {
  const favoritos: {}[] = JSON.parse(localStorage.getItem("favoritos")!) ?? [];
  localStorage.setItem("favoritos", JSON.stringify([...favoritos, receta]));
}

export function existeStorage(id: string) {
  const favoritos: { idMeal: string }[] =
    JSON.parse(localStorage.getItem("favoritos")!) ?? [];
  return favoritos.some((favorito) => favorito.idMeal === id);
}
