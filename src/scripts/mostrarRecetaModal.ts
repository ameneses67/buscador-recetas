import { limpiarHTML } from "./mostrarRecetas";
import {
  cerrarModal,
  modalButton,
  modalContent,
  modalReceta,
  modalTitle,
} from "./selectores";

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
  for (let i = 1; i <= 20; i++) {
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

  modalContent.appendChild(listGroup);
}

cerrarModal.addEventListener("click", () => {
  modalReceta.classList.toggle("flex");
  modalReceta.classList.toggle("hidden");
});

modalButton.addEventListener("click", () => {
  modalReceta.classList.toggle("flex");
  modalReceta.classList.toggle("hidden");
});
