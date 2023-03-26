import type { Ireceta } from "./mostrarRecetaModal";
import { mostrarRecetas } from "./mostrarRecetas";

export function eliminarFavorito(id: string) {
  const favoritos: Ireceta[] =
    JSON.parse(localStorage.getItem("favoritos")!) ?? [];
  const favoritosActualizados = favoritos.filter(
    (favorito) => favorito.idMeal !== id
  );
  localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));

  mostrarRecetas(favoritosActualizados);
}
