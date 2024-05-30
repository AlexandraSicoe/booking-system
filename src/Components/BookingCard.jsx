import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Button, Input, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ActionAreaCard() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        boxShadow: "2px 2px 5px",
        marginBottom: "10px",
        width: { xs: "100%", md: "300px" },
      }}
    >
      <CardActionArea>
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
            <Typography
              variant="subtitle1"
              sx={{ color: "#1a237e", marginBottom: "5px" }}
            >
              Start Date
            </Typography>
            <DatePicker
              value={startDate}
              onChange={(date) => setStartDate(date)}
              renderInput={(params) => <Input {...params} fullWidth />}
            />
            <Typography
              variant="subtitle1"
              sx={{ color: "#1a237e", marginTop: "15px", marginBottom: "5px" }}
            >
              End Date
            </Typography>
            <DatePicker
              value={endDate}
              onChange={(date) => setEndDate(date)}
              renderInput={(params) => <Input {...params} fullWidth />}
            />

            <Button
              onClick={() => {
                getBooking();

                window.location.reload();
              }}
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, #1a237e 0%, #000000 100%)",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                marginTop: "15px",
                fontWeight: "bold",
                width: "100%", // Make sure buttons take up equal width
                textTransform: "none",
              }}
            >
              Book
            </Button>
          </form>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
