import { selectInput } from "./selectores";

export function mostrarCategorias(categorias: string[]) {
  categorias.map((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    selectInput.appendChild(option);
  });
}
