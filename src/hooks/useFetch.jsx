import { useEffect, useState } from 'react'

export function useFetch (url, method, token) {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then((response) => {
        if (response.status === 401) {
          sessionStorage.removeItem('token')
          setError(true)
        }
        return response.json()
      })
      .then((data) => {
        setResponse(data)
      })
      .catch(() => {
        setError(true)
        sessionStorage.removeItem('token')
      })
  }, [url, method, token])

  return [response, error]
}
