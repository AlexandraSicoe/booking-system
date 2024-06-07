import { Box, Typography, Grid, Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import BookingImage from "../images/letsStartBooking.jpg";

const BookingRecord = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const getBookingRecords = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3012/api/bookings", {
        headers: { Authorization: "Bearer " + token },
      });
      setBookings(response.data);
    } catch (error) {
      setError("Failed to fetch booking records");
    }
  };

  const deleteBooking = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      console.log(_id);
      const response = await axios.delete(
        `http://localhost:3012/api/bookings/${_id}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      setMessage(response.data.message);
      getBookingRecords();
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("Failed to delete booking");
    }
  };

  useEffect(() => {
    getBookingRecords();
  }, []);
  return (
    <Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h5"
          sx={{
            marginBottom: "16px",
            fontWeight: "bold",
            color: "#333",
            selfALign: "center",
          }}
        >
          Your Booking Records
        </Typography>
      </Box>

      {error && (
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      )}
      {message && (
        <Typography color="success" variant="h6">
          {message}
        </Typography>
      )}
      {bookings.length > 0
        ? bookings.map((booking) => (
            <Grid
              key={booking._id}
              direction="column"
              sx={{
                padding: "20px",
                backgroundColor: "#f9f9f9",
                color: "black",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
                alignItems: { xs: "center", md: "start" },
                marginLeft: { xs: "0px", md: "30px", lg: "50px" },
              }}
            >
              <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Location:
                </Typography>
                <Typography variant="h6">{booking.location}</Typography>
              </Grid>
              <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Start Date:
                </Typography>
                <Typography variant="h6">
                  {booking.startDate.slice(0, -14)}
                </Typography>
              </Grid>
              <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  End Date:
                </Typography>
                <Typography variant="h6">
                  {booking.endDate.slice(0, -14)}
                </Typography>
              </Grid>
              <Button
                onClick={() => {
                  deleteBooking(booking._id);
                  console.log(booking._id);
                }}
                sx={{
                  backgroundImage:
                    "linear-gradient(90deg, #1a237e 0%, #000000 100%)",
                  color: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  marginTop: "15px",
                  fontWeight: "bold",
                  width: { xs: "100%", md: "40%" },
                  textTransform: "none",
                  alignSelf: "end",
                }}
              >
                Cancel booking
              </Button>
            </Grid>
          ))
        : !error && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#555", alignSelf: "center" }}
              >
                You haven't made any bookings yet.
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#555", alignSelf: "center" }}
              >
                Let's start booking!
              </Typography>
              <img
                src={BookingImage}
                alt="booking image illustration"
                style={{
                  marginTop: "20px",
                }}
              />
            </Box>
          )}
    </Grid>
  );
};

export default BookingRecord;
