import { Container, Grid, Box } from "@mui/material";
import BookingCard from "./BookingCard";
import BookingRecord from "./BookingRecord";

const Dashboard = () => {
  return (
    <Container>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              position: "sticky",
              top: "80px",
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
            gap: "20px", // add space between items
            marginTop: "20px",
            borderLeft: { xs: "0px", md: "1px solid #e0e0e0" },
          }}
        >
          {Array.from({ length: 12 }).map((booking, index) => (
            <Box key={index}>
              {" "}
              <BookingRecord />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
