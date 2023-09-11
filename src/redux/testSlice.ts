import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TestResult {
  russianWord: string;
  foreignWord: string;
  mistake: string;
}

interface InitialState {
  activeCardNumber: number;
  selectedAnswerOption: string;
  testResult: Array<TestResult>;
}

const initialState: InitialState = {
  activeCardNumber: 0,
  selectedAnswerOption: "",
  testResult: [],
};

const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    increaseActiveCardNumber: (state) => {
      state.activeCardNumber = ++state.activeCardNumber;
    },
    resetActiveCardNumber: (state) => {
      state.activeCardNumber = 0;
    },
    setSelectedAnswerOption: (state, action: PayloadAction<string>) => {
      state.selectedAnswerOption = action.payload;
    },
    resetSelectedAnswerOption: (state) => {
      state.selectedAnswerOption = "";
    },
    setTestResult: (state, action: PayloadAction<TestResult>) => {
      state.testResult = [...state.testResult, action.payload];
    },
  },
});

export const {
  increaseActiveCardNumber,
  resetActiveCardNumber,
  setSelectedAnswerOption,
  resetSelectedAnswerOption,
  setTestResult,
} = test.actions;
export default test.reducer;
