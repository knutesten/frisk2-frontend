// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_LOG = 'FETCH_LOG'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchLog(payload = []) {
  return {
    type: FETCH_LOG,
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
        })
    })
  }
}

export const actions = {
  fetchLog,
  fetchLogAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_LOG]: (state, action) => ({...state, log: action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  log: []
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
