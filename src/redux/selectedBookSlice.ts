import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  selectedBook: string;
}
const initialState: IState = {
  selectedBook: "",
};

const selectedBookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<string>) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { setBook } = selectedBookSlice.actions;
export default selectedBookSlice.reducer;




