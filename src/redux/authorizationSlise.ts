import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IformData {
  login: string,
  password: string,
  reEnterPassword: string
}

interface ISetFormDataProps {
  name: keyof IformData;
  value: string
}

interface IInitialState {
  formData: IformData,
  errorEmailMessage: string
  errorPasswordMessage: string
  otherError: string
}

const initialState: IInitialState = {
  formData: {
    login: "",
    password: "",
    reEnterPassword: ""
  },
  errorEmailMessage: "",
  errorPasswordMessage: "",
  otherError: ""
}

const authorizationSlise = createSlice({
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
    setOtherError: (state, action: PayloadAction<string>) => {
      state.otherError = action.payload
    },
  },

});

export const { setFormData, setErrorEmailMessage, setErrorPasswordMessage, setOtherError } = authorizationSlise.actions;
export default authorizationSlise.reducer;
