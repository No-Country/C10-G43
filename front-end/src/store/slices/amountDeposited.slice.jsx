import { createSlice } from '@reduxjs/toolkit';

export const amountDepositedSlice = createSlice({
    name: 'amountDeposited',
    initialState: 0,
    reducers: {
        setAmountDeposited: (state, action) =>{
            return action.payload;
        }
    }
})

export const { setAmountDeposited } = amountDepositedSlice.actions;

export default amountDepositedSlice.reducer;
