import { configureStore } from '@reduxjs/toolkit';
import isEmailSlice from './slices/isEmail.slice';
import emailDataSlice from './slices/emailData.slice';
import phoneDataSlice from './slices/phoneData.slice';
import emailValidatedSlice from './slices/emailValidated.slice';
import phoneValidatedSlice from './slices/phoneValidated.slice';
import amountDepositedSlice from './slices/amountDeposited.slice';

export default configureStore({
  reducer: {
        isEmail: isEmailSlice,
        emailData: emailDataSlice,
        phoneData: phoneDataSlice,
        emailValidated: emailValidatedSlice,
        phoneValidated: phoneValidatedSlice,
        amountDeposited: amountDepositedSlice
	}
})