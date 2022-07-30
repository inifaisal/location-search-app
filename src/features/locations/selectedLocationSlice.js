import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  locations: {lat: -6.200000, lng: 106.816666}
}

export const SelectedLocationSlice = createSlice({
  name: 'selectedLocation',
  initialState,
  reducers: {
    selectLocation: (state, action) => {
      state.locations =  action.payload
    },
    clearLocation: (state) => {
      state.locations = initialState.locations
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectLocation, clearLocation } = SelectedLocationSlice.actions

export default SelectedLocationSlice.reducer