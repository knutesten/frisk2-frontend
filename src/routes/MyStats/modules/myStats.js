import { fetchGet } from '../../../util/fetchUtil'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_TODAYS_CONSUMPTION = 'FETCH_TODAYS_CONSUMPTION';

// ------------------------------------
// Actions
// ------------------------------------

export function fetchTodaysConsumption(payload = []) {
  return {
    type: FETCH_TODAYS_CONSUMPTION,
    payload
  }
}

export const fetchTodaysConsumptionAsync = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      fetchGet('/api/log/today')
        .then(todaysConsumption => {
          dispatch(fetchTodaysConsumption(todaysConsumption))
          resolve()
        })
    })
  }
}

export const actions = {
  fetchTodaysConsumption,
  fetchTodaysConsumptionAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [FETCH_TODAYS_CONSUMPTION]: (state, action) => {
    let data = [{ values: [] }]
    for (let x = 0; x < 24; x++)
      data[0].values.push({x, y: 0})
    action.payload.forEach(e => {
      const hours = new Date(e.date).getHours()
      data[0].values[hours].y = data[0].values[hours].y + e.type.amount
    })

    return {...state, todaysConsumption: data}
  },
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  todaysConsumption: []
}

export default function myStatsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
