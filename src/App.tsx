import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import DropDownList from "./components/drop-down-list/dropDownList";
import NewsText from "./components/selected-Book-content/SelectedBookContent";
import AddNewBookInput from "./components/add-new-book-Input/AddNewBookInput";
function App() {
  return (
    <>
      <Provider store={store}>
        <DropDownList />
        <NewsText />
        <AddNewBookInput />
      </Provider>
    </>
  );
}
export default App;
