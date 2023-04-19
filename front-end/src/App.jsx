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
import Balance from "./pages/Balance";
import MyCards from "./pages/MyCards";
import TransfersEmail from "./pages/TransfersEmail";
import TransfersAmount from "./pages/TransfersAmount";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TransfersCheckout from "./pages/TransfersCheckout";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/data-validation" element={<DataValidation />} />
        <Route path="/data-validation/validate" element={<SendCode />} />
        <Route path="/data-validation/validate/code" element={<CodeConfirmation />} />
        <Route path="/data-validation/validate/verified" element={<Verified />} />
        <Route path="/data-validation/validate/all-verified" element={<AllVerified />}/>
        <Route path="/registration" element={<RegistrationData />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/transfers/checkout" element={<TransfersCheckout />} />
          <Route path="/transfers/email" element={<TransfersEmail />} />
          <Route path="/transfers/email/:id" element={<TransfersAmount />} />
          <Route path="/help" element={<Help />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/cards" element={<MyCards />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
