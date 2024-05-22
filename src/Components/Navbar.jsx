import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Logo from "../../public/images/Logo.png";
import ProfilePicture from "../../public/images/pfp.jpg";

const Navbar = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1a237e 0%, #000000 100%)", // Gradient background
        position: "fixed",
        zIndex: 9999,
        left: 0,
        top: 0,
        width: "100%",
        padding: "10px 0px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // subtle shadow
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{ height: "60px", width: "60px", borderRadius: "50%" }}
        />{" "}
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
          BookingBee
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={ProfilePicture}
            alt="profile picture"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "white",
              marginLeft: "15px",
              color: "darkblue",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundImage:
                  "linear-gradient(90deg, #1a237e 0%, #000000 100%)",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                transform: "scale(1.05)",
              },
            }}
          >
            Log out
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
