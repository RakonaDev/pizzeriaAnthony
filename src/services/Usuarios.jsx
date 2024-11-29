
export function login(event) {
  event.preventDefault()
  let error = false
  const parametros = {
    email: document.getElementById('usuario').value,
    password: document.getElementById('contrasena').value
  }
  fetch(import.meta.env.VITE_API_URL + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  })
    .then((response) => {
      if(!response.ok) throw new Error;

      return response.json()
    })
    .then((data) => {
      localStorage.setItem('token', data.token)
      if (data.user.role === 'admin') {
        location.pathname = '/admin'
      } else {
        location.pathname = '/'
      }
    })
    .catch(() => {
      alert('Usuario o contraseña incorrectos')
      error = true
    })

  return error
}

export function registro (event) {
  event.preventDefault()
  const parametros = {
    name: document.getElementById('nombre').value,
    email: document.getElementById('usuario').value,
    password: document.getElementById('contrasena').value,
    password_confirmation: document.getElementById('contrasena-confirmar').value
  }

  fetch(import.meta.env.VITE_API_URL + 'register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parametros)
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('token', data.token)
      location.pathname = '/'
    })
}

export async function me (event) {
  event.preventDefault()
  try{
    const res = await fetch(import.meta.env.VITE_API_URL + 'me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    if(!res.ok) throw new Error
    const data = await res.json()
    return data.usuario || []
  }
  catch (error) {
    console.error(error)
    return []
  }
}