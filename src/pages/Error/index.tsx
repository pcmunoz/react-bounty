import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "../../components/Layout";

const Error = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof TypeError) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <Layout>
      <Box id="error-page">
        <Typography variant="h1">Oops!</Typography>
        <Typography>Sorry, an unexpected error has occurred.</Typography>
        <Typography>
          <i>{errorMessage}</i>
        </Typography>
      </Box>
    </Layout>
  );
};

export default Error;
