import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

export const SliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

const Home = () => {
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
    <>
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
            top: "-30%",
            fontSize: "2rem",
            color: "#000",
            zIndex: 10,
            cursor: "pointer",
            userSelect: "none",
            fontWeight: 500,
          }}
        >
          Lorem ipsum dolor
        </Typography>
        <ArrowBackIosNewIcon
          onClick={prevSlide}
          sx={{
            position: "relative",
            top: "-80%",
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
            top: "-80%",
            right: "-89%",
            fontSize: "4rem",
            color: "#000",
            zIndex: 10,
            cursor: "pointer",
            userSelect: "none",
          }}
        />
      </Box>
      <Box
        component="section"
        sx={{ height: "calc(30%)", backgroundColor: "lightgray", padding: "16px" }}
      >
        <Box sx={{ padding: "16px" }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 500 }}>
            What we do
          </Typography>
        </Box>
        <Box sx={{ pl: "96px", pr: "96px", pt: "16px", pb: "16px" }}>
          <Typography align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
