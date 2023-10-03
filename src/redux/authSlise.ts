import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
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
  loaded: boolean
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
  loaded: false
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
    resetForms: (state) => {
      return initialState;
    },
    setLoaded: (state) => {
      state.loaded = true
    },
  },

});

export const { setFormData, setErrorEmailMessage, setErrorPasswordMessage, setAutentificationCode, resetForms, setLoaded } = authSlise.actions;
export default authSlise.reducer;
