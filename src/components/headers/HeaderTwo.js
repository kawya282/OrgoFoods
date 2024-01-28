import React from 'react'
import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'


let theme = createTheme();
theme = responsiveFontSizes(theme);

const heading = "HOME | ";

function HeaderTwo(props) {
    const headerstyle ={
        backgroundImage: 'url("./images/headerTwo.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "70vh"
        
    }
    
    const textstyle = {
        paddingTop: "10%",
        textAlign: "center",
        fontWeight: 800,
        fontFamily: "Poppins",
        color: "#ffffff"
    }

    const substyle = {
        marginTop: "3%",
        fontWeight: 800,
        color: "#ffffff"
    }
    return (
        <div style={headerstyle}>
        <ThemeProvider theme={theme}>
          <Typography style={textstyle} variant = "h5" gutterBottom>{heading} {props.page} </Typography>
          <Typography style={substyle} variant = "h1" gutterBottom>{props.page}</Typography>
        </ThemeProvider>
        </div>
    )
}

export default HeaderTwo
