import React from "react";
import Grid from "@mui/material/Grid";
import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import { useState } from "react";

function LoginRegisterPage() {
  const [formState, setFormState] = useState("Login");
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      {/* {formState === "Register" ? (
        <RegisterForm setFormState={setFormState} />
      ) : formState === "Login" ? (
        <LoginForm setFormState={setFormState} />
      ) : (
        <></> */}
      {formState === "Register" ? (
        <RegisterForm setFormState={setFormState} />
      ) : (
        <LoginForm setFormState={setFormState} />
      )}
    </Grid>
  );
}

export default LoginRegisterPage;
