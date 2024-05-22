import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        level="h1"
        sx={{ mb: 1, color: { xs: "white", md: "black" } }}
      >
        Login
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <FormLabel sx={{ color: { xs: "white", md: "black" } }}>
          Email
        </FormLabel>
        <Input
          startDecorator={<EmailIcon sx={{ color: "#8b5cf6" }} />}
          type="email"
          placeholder="john.doe@email.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          sx={{
            mb: 1,
            fontSize: "var(--joy-fontSize-sm)",
            width: { xs: "100%", sm: "400px" },
          }}
        />
        <FormLabel sx={{ color: { xs: "white", md: "black" } }}>
          Password
        </FormLabel>

        <Input
          startDecorator={<VpnKeyIcon sx={{ color: "#8b5cf6" }} />}
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{
            mb: 1,
            fontSize: "var(--joy-fontSize-sm)",
            width: { xs: "100%", sm: "400px" },
          }}
        />
        <Box display="flex" justifyContent="space-between">
          <Button type="submit">Login</Button>
          <Button
            sx={{
              backgroundColor: { xs: "white", md: "transparent" },
            }}
            variant="outlined"
            onClick={() => {
              setFormState("Register");
            }}
          >
            Register
          </Button>
        </Box>
      </form>
      <Box>
        <Typography
          sx={{
            paddingTop: "5px",
            fontSize: "15px",
            color: { xs: "white", md: "black" },
          }}
        >
          Ai uitat parola?{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => {
              setFormState("Password");
              localStorage.setItem("previousFormState", "Login");
            }}
          >
            <Typography
              sx={{
                "&:hover": {
                  color: "#4a077f",
                },
              }}
            >
              Click aici.
            </Typography>
          </span>
        </Typography>
      </Box>
      {errorMessage.length > 0 && (
        <Alert
          startDecorator={<WarningIcon />}
          variant="solid"
          color="danger"
          sx={{ position: "fixed", bottom: "10px", right: "10px" }}
        >
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
};
export default LoginForm;
