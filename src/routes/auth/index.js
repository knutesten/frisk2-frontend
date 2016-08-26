export function authenticateUser() {
  return (nextState, replace, callback) => {
    if (nextState.location.query.code) {
      getJwtTokenForCode(nextState.location.query)
        .then(auth => {
          replace(nextState.location.pathname)
          localStorage.setItem("jwt-token", auth.jwtToken);
          callback()
        })
        .catch(() => {
          replace('/unauthorized')
          callback()
        })
    } else {
      callback()
    }
  }
}

const getJwtTokenForCode = query => fetch(`/api/auth/token?code=${query.code}&state=${query.state}`)
  .then(r => r.ok ? Promise.resolve(r) : Promise.reject(r))
  .then(r => r.json())
