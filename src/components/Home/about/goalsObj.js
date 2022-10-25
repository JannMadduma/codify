import { Box, Container } from "@mui/system";
import React from "react";
import Typography from '@mui/material/Typography';

export default function Goals(){
    return(
        <>
        <Container sx={{display: "flex", alignItems: "center", height: 780, marginY: 15}}>
            <Container maxWidth={false} 
            sx={{ 
                maxWidth: '800px'
                }}>
            <img style={{width:550}} src="../images/7.svg" alt="" srcset="" />
            </Container>

            <Container maxWidth="lg" 
            sx={{ margin: 0, 
                  padding: 0, 
                  textAlign: "left"
                  }}>

            <Typography variant="h2" 
            sx={{ fontWeight: 'bold', 
                  color: "#82C8E1 ", 
                  fontFamily: 'Poppins, sans-serif;'
                  }}>
                  
                  Our Goal
                  </Typography>

            <Box className="container mb-5 mx-0" style={{ borderBottom: '3px solid rgba(135, 180, 235, 0.8)', borderRadius: 25, width: 470, marginTop: 10, marginBottom: 30 }}></Box>

            <Typography variant="h6" sx={{textAlign: 'left', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif;', width: 460}}>Our aim is to provide a user friendly websites for business owners who desires to enable their business to compete on the modern market.</Typography>
            {/* <Typography variant="h6" sx={{fontWeight: 'light', fontSize: 14, marginTop: 4}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolore distinctio rem vel non animi ut possimus quibusdam, numquam veritatis quod atque dolorum quos eum fugit in maxime quo.</Typography> */}
            </Container>
            
        </Container>
        </>
    )
}