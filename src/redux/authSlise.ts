import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { AuthType } from '../enums/authEnum';
export interface IformData {
  login: string,
  password: string,
  reEnterPassword?: string
}

interface ISetFormDataProps {
  name: keyof IformData;
  value: string
}

interface IInitialState {
  formData: IformData,
  errorEmailMessage: string
  errorPasswordMessage: string
  autentificationCode: string
  authType: string
}

const initialState: IInitialState = {
  formData: {
    login: "",
    password: "",
    reEnterPassword: ""
  },
  errorEmailMessage: "",
  errorPasswordMessage: "",
  autentificationCode: "",
  authType: AuthType.SIGN_IN
}

const authSlise = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<ISetFormDataProps>) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    }, setErrorEmailMessage: (state, action: PayloadAction<string>) => {
      state.errorEmailMessage = action.payload
    },
    setErrorPasswordMessage: (state, action: PayloadAction<string>) => {
      state.errorPasswordMessage = action.payload
    },
    setAutentificationCode: (state, action: PayloadAction<string>) => {
      state.autentificationCode = action.payload
    },
    setAuthType: (state, action: PayloadAction<string>) => {
      state.authType = action.payload
    }
  },

});

export const { setFormData, setErrorEmailMessage, setErrorPasswordMessage, setAuthType, setAutentificationCode } = authSlise.actions;
export default authSlise.reducer;
