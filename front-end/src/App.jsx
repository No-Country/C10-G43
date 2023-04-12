import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DataValidation from "./pages/DataValidation";
import SendCode from "./pages/SendCode";
import CodeConfirmation from "./pages/CodeConfirmation";
import Verified from "./pages/Verified";
import AllVerified from "./pages/AllVerified";
import RegistrationData from "./pages/RegistrationData";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Transfers from "./pages/Transfers";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";

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
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
