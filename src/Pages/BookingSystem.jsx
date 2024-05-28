import { Box, Typography, Button, Grid, Container } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
const BookingSystem = () => {
  return (
    <>
      <Grid sx={{ width: "100vw" }}>
        <Navbar />
        <Dashboard />
      </Grid>
    </>
  );
};

export default BookingSystem;
