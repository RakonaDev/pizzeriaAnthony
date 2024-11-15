export function login ({ event, setFormError }) {
  event.preventDefault()
  var error = false

  const parametros = {
    email: document.getElementById('usuario').value,
    password: document.getElementById('contrasena').value
  }

  fetch(import.meta.env.VITE_API_URL + 'admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(parametros)
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 401) {
        setFormError(true)
      }
      else {
        sessionStorage.setItem('token', data.token)
        location.pathname = '/admin/dashboard'
      }
    })
    .catch(err => {
      console.log(err)
      setFormError(true)
    })
  
  return { error }
}

export default login
