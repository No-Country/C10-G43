import { configureStore } from '@reduxjs/toolkit';
import isEmailSlice from './slices/isEmail.slice';

export default configureStore({
  reducer: {
        isEmail: isEmailSlice,
	}
})