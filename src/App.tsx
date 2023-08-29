import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import SelectedBookContent from "./routes/SelectedBookContent";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:bookTitle" element={<SelectedBookContent />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
