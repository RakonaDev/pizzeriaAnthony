export function login (parametros, ref) {
  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parametros)
  })
}

export function registro (event) {
  event.preventDefault()
  const parametros = {
    name: document.getElementById('nombre').value,
    email: document.getElementById('usuario').value,
    password: document.getElementById('contrasena').value,
    password_confimation: document.getElementById('contrasena-confirmar').value
  }

  fetch('www.google.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parametros)
  })
}
