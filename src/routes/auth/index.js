import { fetchGet } from '../../util/fetchUtil'

export function authenticateUser() {
  return (nextState, replace, callback) => {
    if (localStorage.getItem("jwt-token") || nextState.location.pathname === '/unauthorized') {
      callback()
    } else if (nextState.location.query.code) {
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
      redirectToOpenIdConnectAuthentication()
    }
  }
}

const redirectToOpenIdConnectAuthentication = (callback) =>
  fetchGet('/api/auth/login')
    .then((url) => {
      window.location = url
    })

const getJwtTokenForCode = query => fetchGet(`/api/auth/token?code=${query.code}&state=${query.state}`)


