import { limpiarHTML } from "./mostrarRecetas";
import { agregarFavorito, existeStorage } from "./agregarFavorito";
import {
  modalButton,
  modalContent,
  modalFooter,
  modalReceta,
  modalTitle,
} from "./selectores";
import { eliminarFavorito } from "./eliminarFavorito";
import { mostrarToast } from "./mostrarToast";

export interface Ireceta {
  idMeal: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
}

export function mostrarRecetaModal(receta: Ireceta) {
  const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

  limpiarHTML(modalContent);

  // añadir contenido al modal
  modalTitle.textContent = strMeal;
  modalContent.innerHTML += `
    <img class="block w-full h-auto rounded-md" src="${strMealThumb}" alt="receta ${strMeal}" />
    <h3 class="my-4 font-bold text-2xl">Instrucciones</h3>
    <p>${strInstructions}</p>
    <h3 class="my-4 font-bold text-2xl">Ingredientes</h3>
  `;

  // añadir ingredientes y cantidades
  const listGroup = document.createElement("ul") as HTMLUListElement;
  for (let i: number = 1; i <= 20; i++) {
    if (receta[`strIngredient${i}`]) {
      const ingrediente = receta[`strIngredient${i}`];
      const cantidad = receta[`strMeasure${i}`];

      const ingredienteLi = document.createElement("li");
      ingredienteLi.classList.add(
        "p-2",
        "border",
        "border-red-100",
        "font-medium",
        "text-sm"
      );
      ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

      listGroup.appendChild(ingredienteLi);
    }
  }

  // añadir botón para agregar receta a favoritos
  const btnFavorito = document.createElement("button");
  btnFavorito.classList.add(
    "w-full",
    "bg-red-700",
    "hover:bg-red-800",
    "hover:shadow",
    "text-semibold",
    "text-red-50",
    "p-2",
    "rounded-md"
  );
  btnFavorito.textContent = existeStorage(idMeal)
    ? "Eliminar Favorito"
    : "Guardar Favorito";

  // añadir y eliminar favoritos a localstorage
  btnFavorito.onclick = function () {
    if (existeStorage(idMeal)) {
      eliminarFavorito(idMeal);
      btnFavorito.textContent = "Guardar Favorito";
      mostrarToast("Eliminado correctamente");
      return;
    }

    agregarFavorito(receta);
    btnFavorito.textContent = "Eliminar Favorito";
    mostrarToast("Añadido correctamente");
  };

  // añadir botón para cerrar el modal
  const btnCerrar = document.createElement("button");
  btnCerrar.classList.add(
    "w-full",
    "bg-stone-700",
    "hover:bg-stone-800",
    "hover:shadow",
    "text-semibold",
    "text-stone-50",
    "p-2",
    "rounded-md"
  );
  btnCerrar.textContent = "Cerrar";
  btnCerrar.onclick = function () {
    cerrarModal();
  };

  limpiarHTML(modalFooter);

  modalContent.appendChild(listGroup);
  modalFooter.appendChild(btnFavorito);
  modalFooter.appendChild(btnCerrar);
}

// cerrar modal
function cerrarModal() {
  modalReceta.classList.toggle("flex");
  modalReceta.classList.toggle("hidden");
}

if (modalButton !== null) {
  modalButton.addEventListener("click", () => {
    cerrarModal();
  });
}
