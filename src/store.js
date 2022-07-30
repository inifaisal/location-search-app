import { configureStore } from '@reduxjs/toolkit';

import locationReducer from './features/locations/searchLocationSlice';
import selectedLocationReducer from './features/locations/selectedLocationSlice';

export const store = configureStore({
  reducer: {
   location: locationReducer,
   selectedLocation: selectedLocationReducer
  },
});
