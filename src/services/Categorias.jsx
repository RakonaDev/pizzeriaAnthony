export async function obtenerCategorias() {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data.categorias || []; 
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    return []; 
  }
}

