export function login ({event, setFormError, navigate }) {
  event.preventDefault()
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
        navigate('/admin/dashboard')
        sessionStorage.setItem('token', data.token)
      }
    })
    .catch(err => {
      console.error(err)
      setFormError(true)
    })
  
}
