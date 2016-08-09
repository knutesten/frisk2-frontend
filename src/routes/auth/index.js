export function authenticateUser() {
  return (nextState, replace, callback) => {
    if (localStorage.getItem("jwt-token")) {
      callback()
    } else if (nextState.location.query.code) {
      getJwtTokenForCode(nextState.location.query).then(auth => {
        replace(nextState.location.pathname)
        localStorage.setItem("jwt-token", auth.jwtToken);
        callback()
      })
    } else {
      redirectToOpenIdConnectAuthentication()
    }
  }
}

const redirectToOpenIdConnectAuthentication = (callback) =>
  fetch('/api/auth/login', { method: 'GET' })
    .then(res => res.json())
    .then((url) => {
      window.location = url
    })

const getJwtTokenForCode = query =>
  fetch(`/api/auth/token?code=${query.code}&state=${query.state}`, { method: 'GET' })
    .then(res => res.json())


