export async function obtenerPedidos () {
  
  const res = await fetch(import.meta.env.VITE_API_URL + 'pedidos', {
    headers: {
      'Autorization': sessionStorage.getItem('token')
    }
  })

  if(!res.ok) {
    throw new Error
  }

  const data = await res.json()
  return data.pedidos || []

}