import { fetchGet, fetchPost, fetchDelete } from '../../../util/fetchUtil'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_LOG = 'FETCH_LOG'
export const FETCH_TYPES = 'FETCH_TYPE'
export const FETCH_LEADERBOARD = 'FETCH_LEADERBOARD'
export const FETCH_TOTAL_CONSUMPTION = 'FETCH_TOTAL_CONSUMPTION'

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

export function fetchTotalConsumption(payload) {
  return {
    type: FETCH_TOTAL_CONSUMPTION,
    payload
  }
}

export const fetchLogAsync = () => dispatch =>
  fetchGet('/api/log')
    .then(log =>  dispatch(fetchLog(log)))

export const fetchLeaderboardAsync = () => dispatch =>
      fetchGet('/api/leaderboard')
        .then(leaderboard => dispatch(fetchLeaderboard(leaderboard)))

export const fetchTypesAsync = () => dispatch =>
      fetchGet('/api/type')
        .then(types => dispatch(fetchTypes(types)))

export const fetchTotalConsumptionAsync = () => dispatch =>
      fetchGet('/api/log/total')
        .then(total => dispatch(fetchTotalConsumption(total)))

export const createLogConsumptionOnClick = type => () => () => fetchPost('/api/log', type)

export const undoLogConsumptionOnClick = () => () => fetchDelete('/api/log/undo')

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_LOG]: (state, action) => ({...state, log: action.payload}),
  [FETCH_LEADERBOARD]: (state, action) => ({...state, leaderboard: action.payload}),
  [FETCH_TYPES]: (state, action) => ({...state, types: action.payload}),
  [FETCH_TOTAL_CONSUMPTION]: (state, action) => ({...state, totalConsumption: action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  log: [],
  leaderboard: [],
  types: []
}

export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
