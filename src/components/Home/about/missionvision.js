import { Box, Container } from "@mui/system";
import React from "react";
import Typography from '@mui/material/Typography';
// import './App.css';



export default function Missionvision(){
    return(
        <>
    <Container sx={{display: "flex", flexDirection: "column", height: 780, marginY: 15}}>
        <Container sx={{display: "flex", height: 780}}>
            <Container maxWidth="lg" >
            <img style={{height: 300, width: 500}} src="../images/10.png"/>
            </Container>
            <Container maxWidth="lg" >
                <Container maxWidth="lg" sx={{flexDirection: "column"}}>

                <Typography variant="h2" 
                sx={{fontWeight: 'bold', 
                     color: "#82C8E1 ", 
                     fontFamily: 'Poppins, sans-serif;', 
                     textAlign: 'center', 
                     marginBottom: 5}}>
                     
                     Our Vision
                     </Typography>
                <Typography variant="h6" 
                sx={{fontWeight: 'bold', 
                    marginBottom: 5, 
                    fontFamily: 'Poppins, sans-serif;', 
                    textAlign: 'center'}}>
                    
                    "We want to create a place for business owners who wants to grow their business further into the world of modern market"
                    </Typography>
                </Container>
            </Container>
        </Container>

        
        <Container sx={{display: "flex", height: 780}}>
            <Container maxWidth="lg">
                <Container maxWidth="lg" sx={{flexDirection: "column"}}>
                <Typography variant="h2" 
                sx={{fontWeight: 'bold', 
                color: '#82C8E1 ', 
                fontFamily: 'Poppins, sans-serif;', 
                textAlign: 'center', 
                marginBottom: 5}}>
                
                Our Mission
                </Typography>
                <Typography variant="h6" 
                sx={{fontWeight: 'bold', 
                     marginBottom: 5, 
                     fontFamily: 'Poppins, sans-serif;', 
                     textAlign: 'center'}}>
                     
                     "We aim to create a more open, worry free medium for business owners, especially small businesses where they can directly inquire to us and talk about their desired projects where we can help them reach a goal they never expected they could"</Typography>
                </Container>
            </Container>
            <Container maxWidth="lg">
            <img style={{height: 300, width: 500}} src="../images/5.png">

              
            </img>
            </Container>
        </Container>
    </Container>
        </>
    )
}