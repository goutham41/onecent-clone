import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Badge,
  Stack,
} from "@mui/material";
import Slider from "react-slick";

import { styled } from "@mui/system";

const property = [
  {
    title: "Onecent O'live",
    description:
      "Explore the epitome of modern living at Onecent Olive. These stylish 2BHK apartments in Phase 4, Vanastalipuram, boast a five-floor elevation design characterized by clean lines, sleek façade, and contemporary architectural style. Enjoy panoramic views and ample natural light, harmoniously blending modern materials like concrete, steel, and glass, creating a sophisticated and visually striking aesthetic.",
    img: [
      "https://onecent.homes/wp-content/uploads/2023/12/Floor-Plan-Olive-1.jpg",
      "https://onecent.homes/wp-content/uploads/2023/12/Floor-Plan-Olive-6.jpg",
      "https://onecent.homes/wp-content/uploads/2023/12/Floor-Plan-Olive-3.jpg",
      "https://onecent.homes/wp-content/uploads/2023/12/Floor-Plan-Olive-1.jpg",
    ],
    status: false,
  },
  {
    title: "Onecent Orchad",
    description:
      "Step into the future with Onecent Orchard’s ultra-modern glass front elevation design. These contemporary 3BHK apartments in Hanuman Nagar, Kharmangath, redefine luxury living at 1520 sqft. Experience the seamless connection between indoor and outdoor spaces, creating an airy, modern ambiance reminiscent of a super cool art gallery. The sleek lines and large glass panels bring a touch of sophistication, making these homes a perfect blend of art and contemporary design.",
    img: [
      "https://onecent.homes/wp-content/uploads/2023/12/ONE-CENT-HOMES-ORCHID.jpg",
      "https://onecent.homes/wp-content/uploads/2023/12/west-floor-plan-view-01.webp",
    ],
    status: false,
  },
  {
    title: "Onecent Oorja",
    description:
      "Discover timeless elegance at Onecent Oorja in Meerpet. With area options ranging from 1200 sqft to 1650 sqft, these 2BHK and 3BHK apartments present a classic design that evokes a sense of enduring sophistication. Immerse yourself in the charm of refined details, ensuring a perfect harmony of space and luxury.",
    img: [
      "https://onecent.homes/wp-content/uploads/2023/12/ONE-CENT-03-ELEVATION-3D-VIEW_09-12-2023-pdf.io_-1024x683.webp",
    ],
    status: true,
  },
];

const ImageSlider = styled(Slider)(({ theme }) => ({
  ".slick-prev, .slick-next": {
    zIndex: 1,
  },
  ".slick-prev:before, .slick-next:before": {
    color: "black",
  },
  ".slick-dots li button:before": {
    color: "black",
  },
}));

const PropertyCard = ({ title, description, img, status }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <Card
      sx={{
        margin: 2,
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {img.length > 1 ? (
        <ImageSlider {...settings}>
          {img.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="200"
              image={image}
              alt={`${title} image ${index + 1}`}
            />
          ))}
        </ImageSlider>
      ) : (
        <CardMedia component="img" height="200" image={img[0]} alt={title} />
      )}
      <CardContent>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {status && (
            <Typography variant="caption" color="text.secondary" mb={1}>
              ONGOING PROJECT
            </Typography>
          )}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const PropertyList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {property.map((prop, index) => (
        <PropertyCard key={index} {...prop} />
      ))}
    </Box>
  );
};

export default PropertyList;
