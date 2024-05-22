import React, { useState } from "react";
import { Box, Typography, Button, Input } from "@mui/material";

const LoginForm = ({ setFormState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "10px",
        padding: "20px", // Increased padding for better spacing
        borderRadius: 8,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center horizontally and vertically
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, color: "#1a237e", fontWeight: "bold" }}
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
