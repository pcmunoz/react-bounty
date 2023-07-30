import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const footerBoxSx = {
  py: 3,
  px: 2,
  mt: "auto",
  backgroundColor: "lightgray",
};

const Footer = () => {
  return (
    <Box component="footer" sx={footerBoxSx}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          {`© ${new Date().getFullYear()} Bounty Media Pte. Ltd, Singapore.`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
