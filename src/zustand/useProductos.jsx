import { create } from 'zustand';
import { actualizarProducto, obtenerProductos } from '../services/Productos';

export const useProductos = create((set, get) => ({
  productos : [],
  setProductos : (data) => set((state) => state.productos = data),
  cargarProductos: async () => {
    const productos = await obtenerProductos();
    set({ productos });
  },
  editarProducto: async ({ id, nombre, descripcion, precio, stock, imagen, categoria }) => {
    await actualizarProducto({ id, nombre, descripcion, precio, stock, imagen, categoria });
  },
  mostrarPizzas: () => {
    const productos = get().productos; // Obtén los productos actuales del estado
    return productos.filter((producto) => producto.categoria === 1);
  }
}))