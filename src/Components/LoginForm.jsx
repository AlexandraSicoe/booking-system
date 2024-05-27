import React, { useState } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import axios from "axios";
// import { decode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setFormState }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault(); // opresc butoanele din a realiza o actiune default, e.g. submit
    navigate("/");

    try {
      const response = await axios.post(
        "http://localhost:3012/api/auth/login",
        {
          username: username,
          password: password,
        }
      );
      const { token } = response.data;
      console.log("Login successful, token:", token);

      // Decode the token
      // const decodedToken = decode(token);
      // console.log("Decoded token:", decodedToken);

      // Store the token in local storage or handle it as needed
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login error:", error);
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
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
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
        Login
      </Typography>
      <form>
        <Input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ style: { color: "#1a237e" } }}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          inputProps={{ style: { color: "#1a237e" } }}
        />
        <Box display="flex" justifyContent="space-between">
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              loginUser(e);
            }}
            sx={{
              backgroundColor: "#1a237e",
              color: "white", // White text color
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#3f51b5", // Darken background color on hover
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.05)",
              },
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              setFormState("Register");
            }}
            type="submit"
            variant="contained"
            sx={{
              // backgroundColor: "#1a237e",
              border: "1px solid #1a237e",
              backgroundColor: "transparent",
              color: "#1a237e", // White text color
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1a237e", // Darken background color on hover
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.05)",
                color: "white",
              },
            }}
          >
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
