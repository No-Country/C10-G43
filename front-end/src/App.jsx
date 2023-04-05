import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import DataValidation from "./pages/DataValidation";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/validation" element={<DataValidation/>} />
        <Route path="/homepage" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
