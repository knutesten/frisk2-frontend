const createDefaultHeaders = () => new Headers({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
})

const redirectToOpenIdConnectAuthentication = () =>
  fetchGet('/api/auth/login')
    .then((url) => {
      window.location = url
    })

const redirectIfUnauthorized = r => {
  if (r.status === 403 || r.status === 401) {
    document.getElementById('root').style.visibility = 'hidden';
    localStorage.removeItem('jwt-token')
    redirectToOpenIdConnectAuthentication()
  }
  return Promise.resolve(r)
}

export function fetchPost (url, body) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: createDefaultHeaders()
  })
    .then(redirectIfUnauthorized)
    .then(r => r.json())
}

export function fetchGet (url) {
  return fetch(url, {
    headers: createDefaultHeaders()
  })
    .then(redirectIfUnauthorized)
    .then(r => r.json())
}

export function fetchDelete (url) {
  return fetch(url, {
    method: 'DELETE',
    headers: createDefaultHeaders()
  })
    .then(redirectIfUnauthorized)
}

export function fetchPut (url) {
  return fetch(url, {
    method: 'PUT',
    headers: createDefaultHeaders()
  })
    .then(redirectIfUnauthorized)
    .then(r => r.json())
}
