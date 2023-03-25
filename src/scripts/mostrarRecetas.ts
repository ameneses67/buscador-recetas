import { modalReceta, recetario, recetasContenedor } from "./selectores";
import { seleccionarReceta } from "./seleccionarReceta";

export function mostrarRecetas(recetas: []) {
  limpiarHTML(recetasContenedor);

  const heading = document.createElement("h2");
  heading.classList.add("text-center", "font-bold", "text-2xl", "mb-8");
  heading.textContent = recetas.length
    ? "Disfruta tus recetas"
    : "No se encontraron resultados";

  recetario.insertBefore(heading, recetasContenedor);

  recetas.forEach((receta) => {
    const { idMeal, strMeal, strMealThumb } = receta;

    // crear tarjeta
    const recetaCard = document.createElement("div");
    recetaCard.classList.add(
      "border",
      "border-gray-300",
      "rounded-lg",
      "overflow-hidden",
      "shadow",
      "hover:translate-x-0.5",
      "hover:-translate-y-0.5",
      "hover:shadow-lg",
      "transition",
      "duration-300",
      "ease-in-out"
    );

    // crear imagen
    const recetaImagen = document.createElement("img");
    recetaImagen.classList.add("block", "w-full", "h-auto");
    recetaImagen.alt = `Imagen de la receta ${strMeal}`;
    recetaImagen.src = strMealThumb;

    // crear cuerpo tarjeta
    const recetaCardBody = document.createElement("div");
    recetaCardBody.classList.add("p-4");

    // crear nombre receta
    const recetaTitulo = document.createElement("h3");
    recetaTitulo.classList.add("text-xl", "font-bold", "mb-2");
    recetaTitulo.textContent = strMeal;

    // crear botón
    const recetaBtn = document.createElement("button");
    recetaBtn.classList.add(
      "px-8",
      "py-1",
      "bg-red-700",
      "text-slate-50",
      "font-semibold",
      "rounded-md",
      "hover:bg-red-800",
      "hover:shadow"
    );
    recetaBtn.textContent = "Ver Receta";

    recetaBtn.onclick = function () {
      modalReceta.classList.toggle("flex");
      modalReceta.classList.toggle("hidden");
      seleccionarReceta(idMeal);
    };

    // añadir elementos al cuerpo de la tarjeta
    recetaCardBody.appendChild(recetaTitulo);
    recetaCardBody.appendChild(recetaBtn);

    // añadir elementos a la tarjeta
    recetaCard.appendChild(recetaImagen);
    recetaCard.appendChild(recetaCardBody);

    // añadir tarjeta al dom
    recetasContenedor.appendChild(recetaCard);
  });
}

export function limpiarHTML(selector: HTMLElement) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}
