import { create } from "zustand";
import { me } from "../services/Usuarios";

export const useUsuario = create((set) => ({
  usuario: [],
  cargarUsuario: async () => {
    const usuario = await me()
    set({ usuario })
  }
}))