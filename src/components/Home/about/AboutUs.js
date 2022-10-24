import { Box, Container } from "@mui/system";
import React from "react";
import Typography from '@mui/material/Typography';

export default function AboutUs(){
    return(
        <>
        <Container sx={{display: "flex", alignItems: "center", height: 780, marginY: 15}}>
            <Container maxWidth="lg" sx={{ margin: 0, padding: 0}}>
            <Typography variant="h2" sx={{fontWeight: 'bold', color: 'rgba(50, 180, 235, 0.8)', fontFamily: 'Poppins, sans-serif;'}}>About Us</Typography>

            <Box className="container mb-5 mx-0" style={{ borderBottom: '3px solid rgba(135, 180, 235, 0.8)', borderRadius: 25, width: 380, marginTop: 10, marginBottom: 30 }}></Box>

            <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom: 5, fontFamily: 'Poppins, sans-serif;'}}>We are visionary developers that seeks improvement to the current innovations we are using. We are passionate and determined to excel and give our best in every challenge we face. We are, Codify.</Typography>
            
            <Box className="container mb-5 mx-0" style={{ borderBottom: '1px solid rgba(135, 180, 235, 0.8)', borderRadius: 25, width: 380}}></Box>

            <Typography variant="h6" sx={{fontStyle: 'italic', fontWeight: 'light', fontSize: 14, marginTop: 0.5, fontFamily: 'Poppins, sans-serif;'}}>Know more about us on our portfolios!</Typography>
            </Container>
            <Container maxWidth={false} sx={{ maxWidth: '700px' }}>
            <img style={{width:750}} src="../images/6.svg" alt="" srcset="" />
            </Container>
        </Container>
        </>
    )
}