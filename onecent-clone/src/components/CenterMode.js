import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";

const data = [
  {
    img: "https://onecent.homes/wp-content/uploads/2023/12/Hero-Image-1.webp",
    title: "Modern Elegance",
  },
  {
    img: "https://onecent.homes/wp-content/uploads/2023/12/Hero-Image-3.webp",
    title: "Premium Quality",
  },
  {
    img: "https://onecent.homes/wp-content/uploads/2023/12/Hero-Image-2.webp",
    title: "Luxury & Affordable Pricing",
  },
  {
    img: "https://onecent.homes/wp-content/uploads/2023/12/Hero-Image-1.webp",
    title: "Prime Location",
  },
];

const ImageContainer = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "250px",
  overflow: "hidden",
  margin: "10px",
  marginBottom: "100px",
  transition: "height 0.3s ease, transform 0.3s ease",
  height: "300px",
  marginBottom: "60px",
  "&:hover": {
    height: "300px",
    marginBottom: "60px",
  },
  "&:hover .MuiCardMedia-root": {
    height: "100%",
    transform: "scale(1.05)",
  },
  "&:hover .MuiCardContent-root": {
    display: "block",
  },
}));

const Image = styled(CardMedia)(({ theme }) => ({
  width: "100%",
  height: "200%",
  transition: "height 0.3s ease, transform 0.3s ease",
}));

const ImageTitle = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  width: "100%",
  textAlign: "center",
  // display: "none",
  transition: "display 0.3s ease",
}));

const ImageList = () => {
  return (
    <Container>
      <Box display="flex" flexWrap="wrap">
        {data.map((item, index) => (
          <ImageContainer key={index}>
            <Image image={item.img} title={item.title} />
            <ImageTitle>
              <Typography variant="h6">{item.title}</Typography>
            </ImageTitle>
          </ImageContainer>
        ))}
      </Box>
    </Container>
  );
};

export default ImageList;
