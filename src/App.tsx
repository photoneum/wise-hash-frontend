
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "./store/reducer";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";


function App() {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const isAuthenticated = user?.authenticated;
  const userType = user?.userType;

  return (
    <PersistGate persistor={persistor}>
      {/* <BrowserRouter>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/create-password/:token" element={<CreatePassword />} />
            <Route path="/welcome-on-board" element={<WelcomeOnBoard />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
        ) : userType === "CAR_RIDER" ? (
          <DashboardRiders>
            <RiderMarketplace />
          </DashboardRiders>
        ) : (
          <DashboardOwners>
            <OwnerMarketplace />
          </DashboardOwners>
        )}
      </BrowserRouter> */}
    </PersistGate>
  );
}

export default App;
