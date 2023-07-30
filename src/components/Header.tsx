import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Fragment, MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import BountyIcon from "./BountyIcon";

const nameSX = (xs: boolean) => ({
  mr: 2,
  display: { xs: xs ? "flex" : "none", md: xs ? "none" : "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "black",
  textDecoration: "none",
});

const menuSX = {
  display: { xs: "block", md: "none" },
};

// const pageWrapperSX = { flexGrow: 1, display: { xs: "none", md: "flex" } };

const pageButtonSX = { my: 2, color: "black", display: "block" };

const iconSX = (xs: boolean) => ({
  display: { xs: xs ? "flex" : "none", md: xs ? "none" : "flex" },
  mr: 1,
});

const toolbarSX = {
  backgroundColor: "lightgray",
};

const pages = [
  { name: "Home", path: "", key: "home" },
  { name: "About Us", path: "about-us", key: "aboutUs" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={toolbarSX}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <BountyIcon sx={iconSX(false)} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={nameSX(false)}
            state={{ page: "home" }}
          >
            React Bounty
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={menuSX}
            >
              {pages.map((page) => (
                <MenuItem key={`menu-${page.key}`} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={`/${page.path}`}
                    state={{ page: page.path }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BountyIcon sx={iconSX(true)} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={nameSX(true)}
            state={{ page: "home" }}
          >
            React Bounty
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Fragment key={`button-${page.key}`}>
                <Button
                  component={Link}
                  sx={pageButtonSX}
                  to={`/${page.path}`}
                  state={{ page: page.path }}
                >
                  {page.name}
                </Button>
                <Divider orientation="vertical" />
              </Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
