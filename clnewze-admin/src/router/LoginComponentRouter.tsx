import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import SignOnPage from "../pages/login/SignOnPage";

const LoginComponentRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signon" element={<SignOnPage />} />
      </Routes>
    </div>
  );
};

export default LoginComponentRouter;
