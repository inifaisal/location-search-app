import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  locations: []
}

export const SearchLocationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    saveLocationList: (state, action) => {
      state.locations =  action.payload
    },
    clearLocationList: (state) => {
      state.locations = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveLocationList, clearLocationList } = SearchLocationSlice.actions

export default SearchLocationSlice.reducer