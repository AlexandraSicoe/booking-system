import { Box, Typography, Grid } from "@mui/material";

const BookingRecord = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "start" },
        marginLeft: { xs: "0px", md: "30px", lg: "50px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "16px",
          fontWeight: "bold",
          color: "#333",
          alignSelf: "center",
        }}
      >
        Booking Record
      </Typography>
      <Grid direction="column" sx={{ color: "#555" }}>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Name:{" "}
          </Typography>
          <Typography variant="h6"> John Doe</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Location:
          </Typography>
          <Typography variant="h6">New York, NY</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Start Date:
          </Typography>
          <Typography variant="h6">01/01/2023</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            End Date:
          </Typography>
          <Typography variant="h6">01/07/2023</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingRecord;
