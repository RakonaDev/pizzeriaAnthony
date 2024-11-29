export function capitalizarPrimeraLetra(cadena) {
  if (!cadena) return ''; // Maneja cadenas vacías o valores null/undefined
  return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}
