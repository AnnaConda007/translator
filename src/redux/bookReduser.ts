import { AnyAction } from "redux";

type SetSelectedBookAction = {
  type: typeof SET_SELECTED_BOOK;
  payload: string;
};
export type Action = SetSelectedBookAction | AnyAction;

interface State {
  selectedBook: string;
}

export const SET_SELECTED_BOOK = "SET_SELECTED_BOOK";
const initialState: State = {
  selectedBook: "",
};

const bookReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_SELECTED_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
