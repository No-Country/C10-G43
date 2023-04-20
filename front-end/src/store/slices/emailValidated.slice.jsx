import { createSlice } from '@reduxjs/toolkit';

export const emailValidatedSlice = createSlice({
    name: 'emailValidated',
    initialState: false,
    reducers: {
        setEmailValidated: (state, action)=>{
            return action.payload;
        }
    }
})

export const { setEmailValidated } = emailValidatedSlice.actions;

export default emailValidatedSlice.reducer;
