import { Container, Grid, Box } from "@mui/material";
import BookingCard from "./BookingCard";
import BookingRecord from "./BookingRecord";

const Dashboard = () => {
  return (
    <Container
      sx={{
        paddingLeft: { xs: "16px", sm: "24px" }, // Adjust padding for responsiveness
      }}
    >
      <Grid container>
        {" "}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              position: "sticky",
              top: "100px",
              paddingRight: { xs: "0", md: "16px" }, // Adjust padding for better layout
            }}
          >
            <BookingCard />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: { sm: "0px", md: "10px" },
            paddingTop: { xs: "20px", md: "0" }, // Adjust top padding for consistency
            borderLeft: { xs: "0px", lg: "1px solid #e0e0e0" },
            paddingLeft: { xs: "0", lg: "16px" }, // Add padding left to align with border
          }}
        >
          <Box
            sx={{
              paddingBottom: "20px",
            }}
          >
            <BookingRecord />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
