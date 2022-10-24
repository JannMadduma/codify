import { Container } from "@mui/system";
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
            <Typography variant="h1">Our Goal</Typography>
            <Typography variant="h6" sx={{fontWeight: 'medium'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolore distinctio rem vel non animi ut possimus quibusdam, numquam veritatis quod atque dolorum quos eum fugit in maxime quo.</Typography>
            <Typography variant="h6" sx={{fontWeight: 'light', fontSize: 14, marginTop: 4}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores dolore distinctio rem vel non animi ut possimus quibusdam, numquam veritatis quod atque dolorum quos eum fugit in maxime quo.</Typography>
            </Container>
            
        </Container>
        </>
    )
}