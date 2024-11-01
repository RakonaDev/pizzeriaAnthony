
export function login(event) {
  event.preventDefault()
  const parametros = {
    email: document.getElementById('usuario').value,
    password: document.getElementById('contrasena').value
  }
  fetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros),
  })
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('token', data.token)
      location.pathname = '/'
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

  fetch('http://127.0.0.1:8000/api/register', {
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
