import type { Ireceta } from "./mostrarRecetaModal";
import { mostrarRecetas } from "./mostrarRecetas";

const favoritos: Ireceta[] = JSON.parse(localStorage.getItem("favoritos")!);

mostrarRecetas(favoritos);
