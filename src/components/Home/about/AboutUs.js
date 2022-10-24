import { Container } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          height: 780,
          border: 1,
          marginY: 15,
        }}
        id="aboutUs"
      >
        <Container maxWidth="lg" sx={{ border: 1, margin: 0, padding: 0 }}>
          <Typography variant="h1">About Us</Typography>
          <Typography variant="h6" sx={{ fontWeight: "medium" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores
            dolore distinctio rem vel non animi ut possimus quibusdam, numquam
            veritatis quod atque dolorum quos eum fugit in maxime quo.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "light", fontSize: 14, marginTop: 4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores
            dolore distinctio rem vel non animi ut possimus quibusdam, numquam
            veritatis quod atque dolorum quos eum fugit in maxime quo.
          </Typography>
        </Container>
        <Container
          maxWidth={false}
          sx={{ maxWidth: "550px", border: "1px solid" }}
        >
          <img
            style={{ width: 550 }}
            src="https://img.freepik.com/free-vector/group-business-people-avatar-character_24877-57314.jpg?w=900&t=st=1666064110~exp=1666064710~hmac=21d79ecd2d5e46ad3430e80d2046f7e490690ede88ae7b914054f49a3c1e1ce0"
            alt=""
            srcset=""
          />
        </Container>
      </Container>
    </>
  );
}
