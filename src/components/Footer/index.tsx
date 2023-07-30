import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { footerBox } from "./styles";

const Footer = () => {
  return (
    <Box component="footer" sx={footerBox}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          {`© ${new Date().getFullYear()} Bounty Media Pte. Ltd, Singapore.`}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
