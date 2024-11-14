
export function login(event) {
  event.preventDefault()
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
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('token', data.token)
      if (data.user.role === 'admin') {
        location.pathname = '/admin'
      } else {
        location.pathname = '/'
      }
    })
    .catch(() => {
      alert('Usuario o contraseña incorrectos')
    })
}

export function registro (event) {
  event.preventDefault()
  const parametros = {
    name: document.getElementById('nombre').value,
    email: document.getElementById('usuario').value,
    password: document.getElementById('contrasena').value,
    password_confirmation: document.getElementById('contrasena-confirmar').value
  }

  console.log(parametros)

  fetch(import.meta.env.VITE_API_URL + 'register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parametros)
  })
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('token', data.token)
      location.pathname = '/'
    })
}
