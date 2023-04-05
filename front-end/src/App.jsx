import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import DataValidation from "./pages/DataValidation";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Transfers from "./pages/Transfers";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/validation" element={<DataValidation />} />
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
