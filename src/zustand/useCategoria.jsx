import { create } from "zustand";
import { obtenerCategorias } from "../services/Categorias";

// Crear el store de Zustand
export const useCategorias = create((set) => ({
  categorias: [], 
  cargarCategorias: async () => {
    const categorias = await obtenerCategorias();
    set({ categorias }); 
  },
  agregarCategoria: () => {
    console.log("Agregar categoria");
  }
}));