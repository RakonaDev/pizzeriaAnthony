import { useEffect, useState } from 'react'

export function useFetch (url, method = "GET", token = "", body = "") {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(body)
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
  }, [url, method, token, body])

  return [response, error]
}
