import { createSlice } from '@reduxjs/toolkit';

export const isEmailSlice = createSlice({
		name: 'isEmail',
        initialState: true,
        reducers: {
            setIsEmail: (state, action) => {
                return action.payload;
            }
    }
})

export const { setIsEmail } = isEmailSlice.actions;

export default isEmailSlice.reducer;