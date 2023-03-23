import { obtenerCategorias, selectCategorias } from "./apiCategorias";
import { mostrarCategorias } from "./mostrarCategorias";

function iniciarApp() {
  obtenerCategorias();

  setTimeout(() => {
    mostrarCategorias(selectCategorias);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarApp);

export {};
