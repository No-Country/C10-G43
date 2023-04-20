import { createSlice } from '@reduxjs/toolkit';

export const phoneValidatedSlice = createSlice({
    name: 'phoneValidated',
    initialState: false,
    reducers: {
        setPhoneValidated: (state, action)=>{
            return action.payload;
        }
    }
})

export const { setPhoneValidated } = phoneValidatedSlice.actions;

export default phoneValidatedSlice.reducer;
