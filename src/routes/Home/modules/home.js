// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_LOG = 'FETCH_LOG'
export const FETCH_TYPES = 'FETCH_TYPE'
export const FETCH_LEADERBOARD = 'FETCH_LEADERBOARD'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchLog(payload = []) {
  return {
    type: FETCH_LOG,
    payload
  }
}

export function fetchLeaderboard(payload = []) {
  return {
    type: FETCH_LEADERBOARD,
    payload
  }
}

export function fetchTypes(payload = []) {
  return {
    type: FETCH_TYPES,
    payload
  }
}

export const fetchLogAsync = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      fetch('/api/log')
        .then(r => r.json())
        .then(log => {
          dispatch(fetchLog(log))
          resolve()
        })
    })
  }
}

export const fetchLeaderboardAsync = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      fetch('/api/leaderboard')
        .then(r => r.json())
        .then(leaderboard => {
          dispatch(fetchLeaderboard(leaderboard))
          resolve()
        })
    })
  }
}

export const fetchTypesAsync = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      fetch('/api/type')
        .then(r => r.json())
        .then(types => {
          dispatch(fetchTypes(types))
          resolve()
        })
    })
  }
}

export const createLogConsumptionOnClick = (type) => {
  return () =>
    () => {
      return new Promise((resolve) => {
        fetch('/api/log', {
          method: 'POST',
          body: JSON.stringify(type),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt-token')}`
          })
        })
        resolve()
      })
    }
}

export const actions = {
  fetchLog,
  fetchLogAsync,
  fetchLeaderboard,
  fetchLeaderboardAsync,
  fetchTypes,
  fetchTypesAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_LOG]: (state, action) => ({...state, log: action.payload}),
  [FETCH_LEADERBOARD]: (state, action) => ({...state, leaderboard: action.payload}),
  [FETCH_TYPES]: (state, action) => ({...state, types: action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  log: [],
  leaderboard: [],
  types: []
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
