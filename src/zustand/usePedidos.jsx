import { create } from "zustand";
import { obtenerPedidos } from "../services/Pedidos";

export const usePedidos = create((set) => ({
  infoPedidos: {
    pedidos: [],
    cargando: false,
    error: false
  },
  cargarPedidos: async () => {
    set({ infoPedidos: { cargando: true, error: false, pedidos: [] } });
    try{
      const pedidos = await obtenerPedidos()
      set({ infoPedidos: { pedidos, cargando: false, error: false } });
    }
    catch (error) {
      console.error('Error al cargar los Pedidos ' + error)
      set({ infoPedidos: { pedidos: [], cargando: false, error: true } });
    }
  },
  agregarPedidos: () => {

  },
  verPedidosPorUsuario : () => {

  }
}));