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

const userTestimonials = [
  {
    name: "Mrs. Aparna Singh",
    occupation: "Onecent Oorja",
    testimonial:
      "Onecent Orchard exceeded our expectations. The constant communication and personalized attention made us feel valued. Our home is a haven of comfort and style. Onecent Homes truly delivers on promises!",
  },
  {
    name: "Mrs. Anusha Reddy ",
    occupation: "Onecent Olive",
    testimonial:
      "Our experience with Onecent Olive has been exceptional. The team's communication was prompt and clear, making the entire process stress-free. We are grateful for making the right choice with Onecent Homes.",
  },
  {
    name: "Mrs. Nandini Iyer",
    occupation: "Onecent Orchard",
    testimonial:
      "Onecent Oorja has given us a home that reflects our unique lifestyle. The communication throughout the process was outstanding. We are incredibly satisfied and proud of our choice with Onecent Homes.",
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container id="Testimonials" sx={{ marginBottom: 6 }}>
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
        Testimonials
      </Typography>
      <Box
        sx={{
          width: { sm: "100%" },
          textAlign: { sm: "center", md: "center" },
          mb: 4,
        }}
      >
        <Typography variant="h5" color="text.secondary">
          What our clients said about Onecent Homes
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
