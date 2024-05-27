import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Input, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import CardCover from "../images/CardCover.jpg";
import axios from "axios";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ActionAreaCard() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const getBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:3012/api/bookings",
        {
          location: location,
          startDate: startDate,
          endDate: endDate,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={CardCover} height="140" />
        <CardContent>
          <form
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Input
              type="text"
              placeholder="Location"
              required
              value={location}
              fullWidth
              sx={{ mb: 2 }}
              inputProps={{ style: { color: "#1a237e" } }}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Typography level="title-md">Start Date</Typography>
            <DatePicker onChange={(date) => setStartDate(date)} />
            <Typography
              sx={{
                marginTop: "15px",
              }}
              level="title-md"
            >
              End Date
            </Typography>
            <DatePicker onChange={(date) => setEndDate(date)} />
            <Button
              onClick={() => {
                getBooking();
              }}
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #1a237e 0%, #000000 100%)",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                marginTop: "15px",
              }}
            >
              Create Booking
            </Button>
          </form>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
