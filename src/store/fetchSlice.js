import { createSlice } from '@reduxjs/toolkit'

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false,
    currentFetch: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      return state.currentFetch = true;
    },
    markFetchingFinished: (state) => {
      return state.currentFetch = false;
    },
  }
})

export default fetchStatusSlice;

export const fetchStatusAction = fetchStatusSlice.actions;

