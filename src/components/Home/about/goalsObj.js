import { Box, Container } from "@mui/system";
import React from "react";
import Typography from '@mui/material/Typography';

export default function Goals(){
    return(
        <>
        <Container sx={{display: "flex", alignItems: "center", height: 780, marginY: 15}}>
            <Container maxWidth={false} sx={{ maxWidth: '550px' }}>
            <img style={{width:550}} src="../images/7.svg" alt="" srcset="" />
            </Container>

            <Container maxWidth="lg" sx={{ margin: 0, padding: 0, textAlign: "left"}}>
            <Typography variant="h2" sx={{fontWeight: 'bold', color: 'rgba(50, 180, 235, 0.8)', fontFamily: 'Poppins, sans-serif;'}}>Our Goal</Typography>

            <Box className="container mb-5 mx-0" style={{ borderBottom: '3px solid rgba(135, 180, 235, 0.8)', borderRadius: 25, width: 380, marginTop: 10, marginBottom: 30 }}></Box>

            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolore distinctio rem vel non animi ut possimus quibusdam, numquam veritatis quod atque dolorum quos eum fugit in maxime quo.</Typography>
            <Typography variant="h6" sx={{fontWeight: 'light', fontSize: 14, marginTop: 4}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolore distinctio rem vel non animi ut possimus quibusdam, numquam veritatis quod atque dolorum quos eum fugit in maxime quo.</Typography>
            </Container>
            
        </Container>
        </>
    )
}