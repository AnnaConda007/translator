import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import theme from "./muiThem";
import store from "./redux/store";
import Auth from "./routes/Auth";
import Home from "./routes/home/Home";
import SelectedBookContent from "./routes/SelectedBookPage";

const MainRoutes: React.FC = () => (
  <>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path=":bookTitle" element={<SelectedBookContent />} />
    </Routes>
  </>
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {" "}
        {/* Обертка приложения в ThemeProvider */}
        <Router>
          <Routes>
            <Route path="/authorization" element={<Auth />} />
            <Route path="/*" element={<MainRoutes />} />
          </Routes>
        </Router>
      </ThemeProvider>{" "}
      {/* Закрытие тега ThemeProvider */}
    </Provider>
  );
}

export default App;
