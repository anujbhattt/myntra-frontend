import { createSlice } from '@reduxjs/toolkit'


const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialitem: (state, action) => {
      return action.payload;
    }
  }
})

export const itemsAction = itemSlice.actions;
export default itemSlice;

