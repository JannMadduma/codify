import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/material/Typography";
import Link from "@mui/joy/Link";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import JannProjects from "../Home/portfolio/websites/JannProjects";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item>
          <JannProjects />
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Card
            sx={{
              width: 300,
              bgcolor: "initial",
              boxShadow: "none",
              "--Card-padding": "0px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <AspectRatio ratio="4/3">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                    srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                    loading="lazy"
                    alt="Yosemite by Casey Horner"
                  />
                </figure>
              </AspectRatio>
              <CardCover
                className="gradient-cover"
                sx={{
                  "&:hover, &:focus-within": {
                    opacity: 1,
                  },
                  opacity: 0,
                  transition: "0.1s ease-in",
                  background:
                    "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                }}
              >
                {/* The first box acts as a container that inherits style from the CardCover */}
                <Box>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                      <Link
                        href="#dribbble-shot"
                        overlay
                        underline="none"
                        sx={{
                          color: "#fff",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          display: "block",
                        }}
                      >
                        Yosemite
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </CardCover>
            </Box>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Card
            sx={{
              width: 300,
              bgcolor: "initial",
              boxShadow: "none",
              "--Card-padding": "0px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <AspectRatio ratio="4/3">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                    srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                    loading="lazy"
                    alt="Yosemite by Casey Horner"
                  />
                </figure>
              </AspectRatio>
              <CardCover
                className="gradient-cover"
                sx={{
                  "&:hover, &:focus-within": {
                    opacity: 1,
                  },
                  opacity: 0,
                  transition: "0.1s ease-in",
                  background:
                    "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                }}
              >
                {/* The first box acts as a container that inherits style from the CardCover */}
                <Box>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                      <Link
                        href="#dribbble-shot"
                        overlay
                        underline="none"
                        sx={{
                          color: "#fff",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          display: "block",
                        }}
                      >
                        Yosemite
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </CardCover>
            </Box>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Card
            sx={{
              width: 300,
              bgcolor: "initial",
              boxShadow: "none",
              "--Card-padding": "0px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <AspectRatio ratio="4/3">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                    srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                    loading="lazy"
                    alt="Yosemite by Casey Horner"
                  />
                </figure>
              </AspectRatio>
              <CardCover
                className="gradient-cover"
                sx={{
                  "&:hover, &:focus-within": {
                    opacity: 1,
                  },
                  opacity: 0,
                  transition: "0.1s ease-in",
                  background:
                    "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                }}
              >
                {/* The first box acts as a container that inherits style from the CardCover */}
                <Box>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                      <Link
                        href="#dribbble-shot"
                        overlay
                        underline="none"
                        sx={{
                          color: "#fff",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          display: "block",
                        }}
                      >
                        Yosemite
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </CardCover>
            </Box>
          </Card>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Portfolio() {
  return (
    <Box style={{ padding: "5%" }}>
      <Box
        sx={{ width: "100%", maxWidth: "100%", padding: "1%" }}
        align="center"
      >
        <Typography variant="h4">text here</Typography>
        <Typography variant="h2">header text goes here</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={5}>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
          <Grid container item spacing={5}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
