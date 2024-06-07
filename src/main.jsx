import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BookingSystem from "./Pages/BookingSystem";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RegisterForm />} />
          <Route index element={<BookingSystem />} />
          <Route path="/management" element={<LoginRegisterPage />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>
);
