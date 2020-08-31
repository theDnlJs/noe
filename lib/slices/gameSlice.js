import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const gameSlice = createSlice({
  name: 'counter',
  initialState: {
    step: 0,
    lead : null,
    prize: null,
    played: false,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    increment: (state) => {
      state.step += 1
    },
    decrement: (state) => {
      state.step -= 1
    },
    reset: (state) => {
      state.step = 0
    },
    incrementByAmount: (state, action) => {
      state.step += action.payload
    },
    setPrzie: (state, action) => {
      state.prize = action.payload;
    },
    setLead: (state,action) => {
      state.lead = action.payload;
    }
  },
})

export const selectCount = (state) => state.counter.value

export const {
  increment,
  decrement,
  reset,
  setPrzie,
  incrementByAmount,
  setLead
} = gameSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}


export const getPrize = () => dispatch => {
  axios.get('/api/przies/toss').then(res => {
    dispatch(setPrzie(res))
  })
}

export const setLeadState = (data) => dispatch => {
  dispatch(setLead(data));
};

export const giveAway = (data) => dispatch => {
  axios.post('/api/prizes/give-away', data).then(res => {
    console.log('====================================');
    console.log(res);
    console.log('====================================');
  })
  console.log('====================================');
  console.log(data);
  console.log('====================================');
}
export default gameSlice.reducer