import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BookingSystem from "./Pages/BookingSystem";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<BookingSystem />} />
        <Route path="/management" element={<LoginRegisterPage />} />
        <Route path="/login" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
