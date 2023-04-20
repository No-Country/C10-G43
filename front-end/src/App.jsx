import React, { useEffect, useState } from "react";
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
/* import Help from "./pages/Help";
import Notifications from "./pages/Notifications";
import Balance from "./pages/Balance";
import MyCards from "./pages/MyCards"; */
import TransfersEmailOrId from "./pages/TransfersEmailOrId";
import TransfersAmount from "./pages/TransfersAmount";
import TransferVoucher from "./pages/TransferVoucher";
import UnderConstruction from "./pages/UnderConstruction";
import DesktopPage from "./pages/DesktopPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; //prettier-ignore
import TransfersCheckout from "./pages/TransfersCheckout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { isMobile } from "react-device-detect";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);
    const listener = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isDesktop ? <DesktopPage /> : <LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-validation" element={<DataValidation />} />
        <Route path="/data-validation/validate" element={<SendCode />} />
        <Route path="/data-validation/validate/code" element={<CodeConfirmation />} />
        <Route path="/data-validation/validate/verified" element={<Verified />} />
        <Route path="/data-validation/validate/all-verified" element={<AllVerified />} />
        <Route path="/registration" element={<RegistrationData />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/transfers/checkout" element={<TransfersCheckout />} />
          <Route path="/transfers/email" element={<TransfersEmailOrId byEmail={true} />} />
          <Route path="/transfers/email/:id" element={<TransfersAmount />} />
          <Route path="/transfers/byId" element={<TransfersEmailOrId byEmail={false} />} />
          <Route path="/transfers/:id" element={<TransferVoucher />} />
          <Route path="/cards" element={<UnderConstruction name={"Mis tarjetas"} />} />
          <Route path="/help" element={<UnderConstruction name={"Ayuda"} />} />
          <Route path="/notifications" element={<UnderConstruction name={"Notificaciones"} />} />
          <Route path="/balance" element={<UnderConstruction name={"Tus gastos"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
