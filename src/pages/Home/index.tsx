import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ImageSlider from "../../components/ImageSlider";
import { DescriptionSection } from "./styles";

const Home = () => {
  return (
    <>
      <ImageSlider wrapperSx={{ height: "calc(40%)" }} />
      <Box component="section" sx={DescriptionSection}>
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
