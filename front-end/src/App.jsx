import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import DataValidation from "./pages/DataValidation";
import SendCode from "./pages/SendCode";
import CodeConfirmation from "./pages/CodeConfirmation";
import Verified from "./pages/Verified";
import AllVerified from "./pages/AllVerified";
import RegistrationData from "./pages/RegistrationData";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/data-validation" element={<DataValidation/>} />
        <Route path="/data-validation/validate" element={<SendCode />} />
        <Route path="/data-validation/validate/code" element={<CodeConfirmation />} />
        <Route path="/data-validation/validate/verified" element={<Verified />} />
        <Route path="/data-validation/validate/all-verified" element={<AllVerified />} />
        <Route path="/registration" element={<RegistrationData/>} />
        <Route path="/homepage" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
