import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import BountyIcon from "../BountyIcon";
import MenuBar from "./MenuBar";
import MenuFull from "./MenuFull";
import { appBar } from "./styles";

const Header = () => {
  return (
    <AppBar position="static" sx={appBar}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <BountyIcon sx={{ pr: "8px" }} />
          <MenuBar />
          <MenuFull />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
