// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_LOG = 'FETCH_LOG'
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

export const actions = {
  fetchLog,
  fetchLogAsync,
  fetchLeaderboard,
  fetchLeaderboardAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_LOG]: (state, action) => ({...state, log: action.payload}),
  [FETCH_LEADERBOARD]: (state, action) => ({...state, leaderboard: action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  log: [],
  leaderboard: []
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
