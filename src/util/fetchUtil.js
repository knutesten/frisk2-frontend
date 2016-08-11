const createDefaultHeaders = () => new Headers({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
})

export function fetchPost(url, body) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: createDefaultHeaders()
  }).then(r => r.json())
}

export function fetchGet(url) {
  return fetch(url, {
    headers: createDefaultHeaders()
  }).then(r => r.json())
}

export function fetchDelete(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: createDefaultHeaders()
  })
}
