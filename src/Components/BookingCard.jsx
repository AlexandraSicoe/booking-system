import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardCover from "../../public/images/CardCover.jpg";
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={CardCover} height="140" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Booking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eveniet nam dolor quae nihil unde tempora atque omnis impedit eaque
            quaerat, expedita veritatis sequi optio aliquam, aperiam odio dicta
            sapiente.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
