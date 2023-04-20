import { createSlice } from '@reduxjs/toolkit';

export const phoneDataSlice = createSlice({
    name: 'phoneData',
    initialState: '',
    reducers: {
        setPhoneData: (state, action)=>{
            return action.payload;
        }
    }
})

export const { setPhoneData } = phoneDataSlice.actions;

export default phoneDataSlice.reducer;
