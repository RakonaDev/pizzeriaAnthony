export async function registrarProducto({ nombre, descripcion, precio, stock, imagen, categoria }) {
  const formData = new FormData();
  
  formData.append("nombre", nombre);
  formData.append("descripcion", descripcion);
  formData.append("precio", precio);
  formData.append("stock", stock);
  formData.append("imagen", imagen);
  formData.append("id_categoria", categoria);

  try {
    const response = await fetch(import.meta.env.VITE_API_URL + 'productos', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      },
      body: formData
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error al registrar el producto:', error);
  }
}

export async function obtenerProductos() {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + 'productos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    return data.productos || [];
  } catch (error) {
    console.error('Error al obtener las productos:', error);
    return []; 
  }
}

export async function actualizarProducto({ id, nombre, descripcion, precio, categoria }) {
  const formData = {
    nombre,
    descripcion,
    precio,
    id_categoria: categoria
  }
  

  try {
    const response = await fetch(import.meta.env.VITE_API_URL + `productos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    });
    if(!response.ok) {
      throw new Error('Error al actualizar el producto');
    }
    const data = await response.json();
    return data.producto;
  }
  catch (error) {
    console.error('Error al actualizar el producto:', error);
    return {}
  }
}