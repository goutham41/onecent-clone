import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CenterMode from "./CenterMode";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Pricing() {
  return (
    <Container id="pricing" sx={{ bgcolor: "#06090a" }}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        mb={4}
        mt={4}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          "&": { transition: "0.4s", transform: "translateX(0px)" },
          "&:hover": { transform: "translateX(25px)" },
        }}
      >
        Why Onecent
      </Typography>
      <Box
        sx={{
          width: { sm: "100%" },
          textAlign: { sm: "center", md: "center" },
          mb: 4,
        }}
      >
        <Typography variant="h5" color="text.secondary">
          Because Luxury Should Be Accessible
        </Typography>
      </Box>

      <CenterMode />
    </Container>
  );
}
