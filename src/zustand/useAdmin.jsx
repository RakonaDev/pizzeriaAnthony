import { create } from 'zustand';

export const useAdmin = create((set) => ({
  data : {},
  setCuenta : (data) => set({ data }),
  logout: () => set({ cuenta: {} })
}))