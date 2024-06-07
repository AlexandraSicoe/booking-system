import { Box, Typography, Button, Grid, Container } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import { useNavigate } from "react-router-dom";
const BookingSystem = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/management", { replace: true });
    }
  }, []);
  return (
    <>
      <Grid>
        <Navbar />
        <Dashboard />
      </Grid>
    </>
  );
};

export default BookingSystem;
