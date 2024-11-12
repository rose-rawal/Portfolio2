import { createSlice } from '@reduxjs/toolkit'

export interface JourneyState {
  JourneyStart: boolean
}

const initialState: JourneyState = {
  JourneyStart: false,
}

export const JourneySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reverse: (state) => {
      state.JourneyStart=!state.JourneyStart;
    },
    
  },
})

export const { reverse} = JourneySlice.actions

export default JourneySlice.reducer