import { Container } from "@mui/system";
import React from "react";
import Typography from '@mui/material/Typography';



export default function Missionvision(){
    return(
        <>
    <Container sx={{display: "flex", flexDirection: "column", height: 780, marginY: 15}}>
        <Container sx={{display: "flex", height: 780}}>
            <Container maxWidth="lg" >
            <img style={{height: 300, width: 500}} src="https://img.freepik.com/free-vector/software-engineering-background_1284-3394.jpg?w=740&t=st=1666070538~exp=1666071138~hmac=171d681ae455912d26bb39680c2fbda7d53bbfb08151370d231b1ff71f809fab"/>
            </Container>
            <Container maxWidth="lg" >
                <Container maxWidth="lg" sx={{flexDirection: "column"}}>
                <Typography variant="h2" sx={{fontWeight: 'bold', color: 'rgba(50, 180, 235, 0.8)', fontFamily: 'Poppins, sans-serif;', textAlign: 'center', marginBottom: 5}}>Our Vision</Typography>
                <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom: 5, fontFamily: 'Poppins, sans-serif;', textAlign: 'center'}}>"We want to create a place for business owners who wants to grow their business further into the world of modern market"</Typography>
                </Container>
            </Container>
        </Container>

        
        <Container sx={{display: "flex", height: 780}}>
            <Container maxWidth="lg">
                <Container maxWidth="lg" sx={{flexDirection: "column"}}>
                <Typography variant="h2" sx={{fontWeight: 'bold', color: 'rgba(50, 180, 235, 0.8)', fontFamily: 'Poppins, sans-serif;', textAlign: 'center', marginBottom: 5}}>Our Mission</Typography>
                <Typography variant="h6" sx={{fontWeight: 'bold', marginBottom: 5, fontFamily: 'Poppins, sans-serif;', textAlign: 'center'}}>"We aim to create a more open, worry free medium for business owners, especially small businesses where they can directly inquire to us and talk about their desired projects where we can help them reach a goal they never expected they could"</Typography>
                </Container>
            </Container>
            <Container maxWidth="lg">
            <img style={{height: 300, width: 500}} src="https://img.freepik.com/free-vector/software-engineering-background_1284-3394.jpg?w=740&t=st=1666070538~exp=1666071138~hmac=171d681ae455912d26bb39680c2fbda7d53bbfb08151370d231b1ff71f809fab"/>
            </Container>
        </Container>
    </Container>
        </>
    )
}