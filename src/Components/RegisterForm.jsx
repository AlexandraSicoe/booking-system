import React, { useState } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
// import { decode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ setFormState }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault(); // opresc butoanele din a realiza o actiune default, e.g. submit
    try {
      const response = await axios.post(
        "http://localhost:3012/api/auth/register",
        {
          username: username,
          password: password,
        }
      );
      const { token } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      // Redirect or update state as needed
      console.log("Registration successful, token:", token);
      navigate("/");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "10px",
        padding: "20px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, color: "#1a237e", fontWeight: "bold" }}
      >
        Register
      </Typography>
      <form>
        <Input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          sx={{ color: "#1a237e", mb: 2 }}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2, color: "#1a237e" }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              registerUser(e);
            }}
            sx={{
              backgroundColor: "#1a237e",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#3f51b5",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.05)",
              },
            }}
          >
            Register
          </Button>
          <Button
            onClick={() => {
              setFormState("Login");
            }}
            type="submit"
            variant="contained"
            sx={{
              border: "1px solid #1a237e",
              backgroundColor: "transparent",
              color: "#1a237e",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1a237e",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.05)",
                color: "white",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
