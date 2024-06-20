import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

export default function Testimonials() {
  const theme = useTheme();

  return (
    <>
      <Container
        id="testimonials"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },
          color: "white",
          bgcolor: "#06090a",
        }}
      >
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
       About Us
      </Typography>
      </Container>
      <Container
        sx={{
          // pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
          bgcolor: "#06090a",
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "80%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" color="text.primary" mb={4}>
            Experience we sold over the decade.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            At Onecent homes, our story began on the west side of Hyderabad in
            2020, marking the inception of a brand committed to redefining
            luxury living.Since our humble start, we have grown exponentially,
            expanding our horizons and achieving a remarkable 4x growth by the
            year 2023. We offer more than just apartments – a lifestyle tailored
            to your aspirations. Each residence is crafted with meticulous
            attention, adhering to Vastu principles for a harmonious living
            experience. We’re committed to bringing luxury living at an
            affordable cost without compromising quality.
          </Typography>

          <Typography variant="h6" color="text.primary" mt={4}>
            Start your journey at Onecent, where affordability meets quality,
            and comfort meets style.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
