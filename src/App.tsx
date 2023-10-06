import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import SelectedBookContent from "./routes/SelectedBookPage";
import Auth from './routes/Auth';
import store from "./redux/store";
import Header from './components/header/header';
import { ThemeProvider } from '@mui/material/styles'
import theme from './muiThem';

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
      <ThemeProvider theme={theme}> {/* Обертка приложения в ThemeProvider */}
        <Router>
          <Routes>
            <Route path="/authorization" element={<Auth />} />
            <Route path="/*" element={<MainRoutes />} />
          </Routes>
        </Router>
      </ThemeProvider> {/* Закрытие тега ThemeProvider */}
    </Provider>
  );
}

export default App;
