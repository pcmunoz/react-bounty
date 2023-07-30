import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { sliderData } from "../../constant";
import { backArrow, caption, forwardArrow, imageBox, slideImage } from "./styles";

interface ImageSliderProps {
  wrapperSx?: object;
}

const ImageSlider = (props: ImageSliderProps) => {
  const [current, setCurrent] = React.useState(0);
  const slides = sliderData;
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
    <Box component="section" sx={props.wrapperSx}>
      {slides.map((slide, index) => {
        return (
          <Box key={index} sx={imageBox(index === current)}>
            {index === current && <img src={slide.image} alt="travel image" style={slideImage} />}
          </Box>
        );
      })}
      <Typography align="center" sx={caption}>
        Lorem ipsum dolor
      </Typography>
      <ArrowBackIosNewIcon onClick={prevSlide} sx={backArrow} />
      <ArrowForwardIosIcon onClick={nextSlide} sx={forwardArrow} />
    </Box>
  );
};

export default ImageSlider;
