import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TestResult {
  russianWord: string;
  foreignWord: string;
  correctAnswer: boolean;
}

export interface FlashCardData {
  russianWord: string;
  answerOptionsInForeign: Array<string>;
  foreignWord: string;
}

interface InitialState {
  activeCardNumber: number;
  testResult: Array<TestResult>;
  currentCards: Array<FlashCardData>;
  correctAnswer: boolean;
}

const initialState: InitialState = {
  activeCardNumber: 0,
  testResult: [],
  currentCards: [],
  correctAnswer: false,
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
    setTestResult: (state, action: PayloadAction<TestResult>) => {
      state.testResult = [...state.testResult, action.payload];
    },
    resetTestResult: (state) => {
      state.testResult = [];
    },
    setCurrentCards: (state, action: PayloadAction<Array<FlashCardData>>) => {
      state.currentCards = action.payload;
    },
    setCorrectAnswer: (state, action: PayloadAction<boolean>) => {
      state.correctAnswer = action.payload;
    },
  },
});

export const {
  increaseActiveCardNumber,
  resetActiveCardNumber,
  setTestResult,
  setCurrentCards,
  resetTestResult,
  setCorrectAnswer,
} = test.actions;
export default test.reducer;
