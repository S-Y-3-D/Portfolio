import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const darkSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    switchColor : (state) => {
        state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { switchColor } = darkSlice.actions

export default darkSlice.reducer