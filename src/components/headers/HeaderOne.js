import React from 'react'
import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const heading = "WE SERVE VEGETABLES & FRUITS";
const text = "100% FRESH & ORGANIC";

function HeaderOne() {
  const headerstyle ={
    backgroundImage: 'url("./images/headerOne.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "80vh",
    opacity: "1.0",
    border: "1px solid red",
  }

  const mainstyle = {
    marginTop: "10%",
    padding: "5px",
    textAlign: "center",
    fontWeight: 600,
    fontFamily: "arial",
    color: "#ffffff"
  }

  const substyle = {
    marginTop:"0%", 
    textAlign: "center",
    fontWeight: 600,
    fontFamily: "arial",
    color: "#ffffff"
  }

  return (
    <div style={headerstyle}>
        <ThemeProvider theme={theme}>
          <Typography style={mainstyle} variant = "h1" gutterBottom>{heading}</Typography>
          <Typography style={substyle} variant = "h4" gutterBottom>{text}</Typography>
        </ThemeProvider>
        <Button component={Link} to="/about" variant="contained" color="success" size="large">View More</Button>
    </div>
  )
}

export default HeaderOne
