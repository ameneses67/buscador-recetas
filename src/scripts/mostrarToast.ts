import { limpiarHTML } from "./mostrarRecetas";
import { toast, toastBody, toastHeader } from "./selectores";

export function mostrarToast(mensaje: string) {
  limpiarHTML(toastHeader);

  const toastH2 = document.createElement("h2");
  toastH2.classList.add("font-semibold", "text-sm");
  toastH2.textContent = "Buscador Recetas";

  const toastBtn = document.createElement("button");
  toastBtn.classList.add("px-2", "font-sans", "font-thin");
  toastBtn.textContent = "X";

  toastHeader.appendChild(toastH2);
  toastHeader.appendChild(toastBtn);

  toastBody.textContent = mensaje;
  toast.classList.toggle("hidden");
  toast.classList.toggle("block");

  toastBtn.onclick = function () {
    toast.classList.toggle("hidden");
    toast.classList.toggle("block");
  };

  setTimeout(() => {
    if (toast.classList.contains("block")) {
      toast.classList.toggle("hidden");
      toast.classList.toggle("block");
    }
  }, 3000);
}
