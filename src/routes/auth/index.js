import { fetchPut } from '../../util/fetchUtil'

const JWT_TOKEN_KEY = 'jwt-token'

export function authenticateUser () {
  if (localStorage.getItem(JWT_TOKEN_KEY)) {
    refreshJwtToken()
  }

  return (nextState, replace, callback) => {
    if (nextState.location.query.code) {
      getJwtTokenForCode(nextState.location.query)
        .then(auth => {
          replace(nextState.location.pathname)
          localStorage.setItem(JWT_TOKEN_KEY, auth.jwtToken)
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

const refreshJwtToken = () => fetchPut('/api/auth/token')
  .then(auth => localStorage.setItem(JWT_TOKEN_KEY, auth.jwtToken))
