import { createSlice } from '@reduxjs/toolkit';

export const emailDataSlice = createSlice({
    name: 'emailData',
    initialState: '',
    reducers: {
        setEmailData: (state, action) =>{
            return action.payload;
        }
    }
})

export const { setEmailData } = emailDataSlice.actions;

export default emailDataSlice.reducer;
