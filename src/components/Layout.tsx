import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainContainer = styled(Container)({
  mt: 8,
  mb: 2,
  height: "calc(100vh - 137px)",
});

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

interface Props {
  children?: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <MainBox>
      <Header />
      <MainContainer component="main" maxWidth="lg">
        {props.children ? props.children : <Outlet />}
      </MainContainer>
      <Footer />
    </MainBox>
  );
};

export default Layout;
