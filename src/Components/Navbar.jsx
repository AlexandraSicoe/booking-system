import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Logo from "../images/Logo.png";
import ProfilePicture from "../images/pfp.jpg";

const Navbar = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1a237e 0%, #000000 100%)",
        position: "sticky",
        zIndex: 999, // Decrease z-index to allow other elements to appear above
        top: 0,
        width: "100%",
        padding: "10px 0px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
        />

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
            Logout
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
