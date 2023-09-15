import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TestResult {
  russianWord: string;
  foreignWord: string;
  mistake: string;
}

export interface TestCardData {
  russianWord: string;
  answerOptionsInForeign: Array<string>;
  correctAnswer: string;
}

interface InitialState {
  activeCardNumber: number;
  selectedAnswerOption: string;
  testResult: Array<TestResult>;
  currentCards: Array<TestCardData>;
  mistake: boolean;
}

const initialState: InitialState = {
  activeCardNumber: 0,
  selectedAnswerOption: "",
  testResult: [],
  currentCards: [],
  mistake: false,
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
    resetTestResult: (state) => {
      state.testResult = [];
    },
    setCurrentCards: (state, action: PayloadAction<Array<TestCardData>>) => {
      state.currentCards = action.payload;
    },
    setMistake: (state, action: PayloadAction<boolean>) => {
      state.mistake = action.payload;
    },
  },
});

export const {
  increaseActiveCardNumber,
  resetActiveCardNumber,
  setSelectedAnswerOption,
  resetSelectedAnswerOption,
  setTestResult,
  setCurrentCards,
  resetTestResult,
  setMistake,
} = test.actions;
export default test.reducer;
