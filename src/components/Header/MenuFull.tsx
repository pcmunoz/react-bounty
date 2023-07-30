import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { pages } from "../../constant";
import { SeparationBox } from "./common";
import { menuFullPageButton, menuFullPageEndBox, menuFullSeparator, name } from "./styles";

const MenuFull = () => {
  return (
    <>
      <Typography variant="h6" noWrap component={Link} to="/" sx={name(true)} state={{ page: "home" }}>
        React Bounty
      </Typography>
      <SeparationBox />
      <Box sx={menuFullPageEndBox}>
        {pages.map((page, index) => (
          <Fragment key={`button-${page.key}`}>
            <Button
              component={Link}
              sx={menuFullPageButton}
              to={`/${page.path}`}
              state={{ page: page.path }}
            >
              {page.name}
            </Button>
            {index < pages.length - 1 && <Typography sx={menuFullSeparator}>|</Typography>}
          </Fragment>
        ))}
      </Box>
    </>
  );
};
export default MenuFull;
