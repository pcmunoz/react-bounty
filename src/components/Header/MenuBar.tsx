import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../constant";
import { SeparationBox } from "./common";
import { menuBarEndBox, menuBarMenu, name } from "./styles";

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Typography variant="h6" noWrap component={Link} to="/" sx={name(false)} state={{ page: "home" }}>
        React Bounty
      </Typography>
      <SeparationBox />
      <Box sx={menuBarEndBox}>
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
          sx={menuBarMenu}
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
    </>
  );
};
export default MenuBar;
