import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'


let theme = createTheme();
theme = responsiveFontSizes(theme);

const text1 = "Are You Also an Organic Farmer ?";

function Partnership() {
    const textstyle = {
        padding:'5%',
        color: '#6ab04c',
        fontSize: '45px',
        fontFamily: 'Courgette'
    }

    const substyle = {
        fontFamily: 'Courgette',
        padding: '5%',
        color: 'green',
        fontSize: "50px",
        fontWeight:'700',
    }

  return (
    <Container fluid className='pt-4 pb-4'>
        <ThemeProvider theme={theme}>
            <Typography style={textstyle} className='px-2' variant = "h2" gutterBottom>{text1}</Typography>
        </ThemeProvider>
        <Row xs={2} className="mt-4 g-1 mx-3 mb-4 justify-content-md-center" >
            <Col xs={2}>
                <Image src='https://img.freepik.com/free-photo/close-up-banana-farmer_23-2151005986.jpg' fluid/>
            </Col>
            <Col xs={2}>
                <Image src='https://img.freepik.com/free-photo/portrait-countryside-worker-posing_23-2148761780.jpg' fluid/>
            </Col>
            <Col xs={2}>
                <Image src='https://img.freepik.com/free-photo/portrait-african-senior-man_23-2148833070.jpg' fluid/>
            </Col>
            <Col xs={2}>
                <Image src='https://img.freepik.com/free-photo/portrait-countryside-worker-posing_23-2148761779.jpg' fluid/>
            </Col>
            <Col xs={2}>
                <Image src='https://img.freepik.com/premium-photo/african-farmer-man-dig-prepare-planting_605596-5.jpg' fluid/>
            </Col>
            <Col xs={2}>
                <Image src='https://img.freepik.com/free-photo/front-view-smiley-woman-with-harvest_23-2149894646.jpg' fluid/>
            </Col>
            <Col xs={2}>
                <h3 style={substyle}>J</h3>
            </Col>
            <Col xs={2}>
                <h3 style={substyle}>O</h3>
            </Col>
            <Col xs={2}>
                <h3 style={substyle}>I</h3>
            </Col>
            <Col xs={2}>
                <h3 style={substyle}>N</h3>
            </Col>
            <Col xs={2}>
                <h3 style={substyle}>U</h3>
            </Col>
            <Col xs={2}>
                <h3 style={substyle}>S</h3>
            </Col>
        </Row>    
    </Container>
  )
}

export default Partnership
