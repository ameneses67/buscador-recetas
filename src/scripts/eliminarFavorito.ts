export function eliminarFavorito(id: string) {
  const favoritos: { idMeal: string }[] =
    JSON.parse(localStorage.getItem("favoritos")!) ?? [];
  const favoritosActualizados = favoritos.filter(
    (favorito) => favorito.idMeal !== id
  );
  localStorage.setItem("favoritos", JSON.stringify(favoritosActualizados));
}
