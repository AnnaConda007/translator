import "./App.css";
import DropDownList from "./components/drop-down-list/dropDownList";
import NewsText from "./components/selected-Book-content/SelectedBookContent";
import AddNewBookInput from "./components/add-new-book-Input/AddNewBookInput";
function App() {
  return (
    <>
      <DropDownList />
      <NewsText />
      <AddNewBookInput />
    </>
  );
}
export default App;
