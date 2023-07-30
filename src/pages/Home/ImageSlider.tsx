import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

export const SliderData = [
  {
    image:
      "https://envato-shoebox-0.imgix.net/82cf/1ea0-2cdd-4202-8c6f-54861cfc1d0a/dolomites-seiser-siusi-timelapse-1-813-ST-4.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=2052749da963baf737e63648ecf85659",
  },
  {
    image:
      "https://envato-shoebox-0.imgix.net/972e/ad44-8e30-4259-ac2b-2434fa30ae4e/_DSC7353.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=72bc4e57daca48d302f6f12b82146cf9",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = React.useState(0);
  const slides = SliderData;
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Box component="section" sx={{ height: "calc(40%)" }}>
      {SliderData.map((slide, index) => {
        return (
          <>
            <Box
              key={index}
              sx={{
                height: "100%",
                width: "100%",
                display: index === current ? "block" : "none",
              }}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" style={{ width: "100%", height: "100%" }} />
              )}
            </Box>
          </>
        );
      })}
      <Typography
        align="center"
        sx={{
          position: "relative",
          top: "-20%",
          fontSize: "2rem",
          color: "#000",
          zIndex: 10,
          fontWeight: 500,
        }}
      >
        Lorem ipsum dolor
      </Typography>
      <ArrowBackIosNewIcon
        onClick={prevSlide}
        sx={{
          position: "relative",
          top: "-70%",
          left: "0",
          fontSize: "4rem",
          color: "#000",
          zIndex: 10,
          cursor: "pointer",
          userSelect: "none",
        }}
      />
      <ArrowForwardIosIcon
        onClick={nextSlide}
        sx={{
          position: "relative",
          top: "-70%",
          right: "-89%",
          fontSize: "4rem",
          color: "#000",
          zIndex: 10,
          cursor: "pointer",
          userSelect: "none",
        }}
      />
    </Box>
  );
};

export default ImageSlider;
