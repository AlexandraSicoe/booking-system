import { Container, Grid, Typography } from "@mui/material";
import BookingCard from "./BookingCard";

const Dashboard = () => {
  return (
    <>
      {/* <Typography
        variant="h5"
        align="center"
        sx={{
          color: "darkblue",
          marginBottom: "40px",
          fontFamily: "'Roboto', sans-serif",
          marginTop: "20px",
        }}
      >
        Welcome to BookingBee, your one-stop solution for managing bookings.
      </Typography> */}
      <Grid
        container
        sx={{
          display: "flex!important",
          flexDirection: "row!important",
          alignItems: "center!important",
          justifyContent: {
            xs: "center!important",
            md: "space-between!important",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} // this needs to be a flex because i have an object inside
        >
          <BookingCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} // this needs to be a flex because i have an object inside
        >
          <BookingCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} // this needs to be a flex because i have an object inside
        >
          <BookingCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} // this needs to be a flex because i have an object inside
        >
          <BookingCard />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} // this needs to be a flex because i have an object inside
        >
          <BookingCard />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
