import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ITestResult {
  russianWord: string;
  foreignWord: string;
  correctAnswer: boolean;
}

export interface IFlashCardData {
  russianWord: string;
  answerOptionsInForeign: Array<string>;
  foreignWord: string;
}

interface InitialState {
  activeCardNumber: number;
  testResult: Array<ITestResult>;
  currentCards: Array<IFlashCardData>;
}

const initialState: InitialState = {
  activeCardNumber: 0,
  testResult: [],
  currentCards: [],
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
    setTestResult: (state, action: PayloadAction<ITestResult>) => {
      state.testResult.push(action.payload);
    },
    resetTestResult: (state) => {
      state.testResult = [];
    },
    setCurrentCards: (state, action: PayloadAction<Array<IFlashCardData>>) => {
      state.currentCards = action.payload;
    },
    resetTest: (state) => {
      state.activeCardNumber = 0;
      state.testResult = [];
      state.currentCards = [];
    },
  },
});

export const {
  increaseActiveCardNumber,
  resetActiveCardNumber,
  setTestResult,
  setCurrentCards,
  resetTestResult,
  resetTest,
} = test.actions;
export default test.reducer;
