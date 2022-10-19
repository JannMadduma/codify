import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function SignInButton() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <Typography variant="h1" component="h2">
          CODIFY
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          href="/signin"
          sx={{ width: 200, padding: 1, margin: 2 }}
        >
          Login
        </Button>
        <Typography>Client and Project Management page</Typography>
      </Box>
    </Box>
  );
}
