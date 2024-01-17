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
const text2 = "Join Us Too..."

function Partnership() {
    const textstyle = {
        paddingTop: "10%",
        textAlign: "center",
        fontWeight: 800,
        fontFamily: "arial",
        color: "black"
    }

    const substyle = {
        paddingTop: "10%",
        fontWeight: 800,
        fontFamily: "arial",
        color: "green"
    }

  return (
    <Container fluid className='pt-4 pb-4' style={{backgroundColor:'lightgreen'}}>
        <Row xs={1} md={2} className="mt-4 g-1">
            <Col xs={{ order: 1 }} md={{ order: 1 }}>
                <Image src='https://img.freepik.com/premium-photo/indian-farmer-cotton-field_54391-2206.jpg' fluid  alt="image1" />
            </Col>
            <Col xs={{ order: 2 }} md={{ order: 2 }}>
                <ThemeProvider theme={theme}>
                    <hr/>
                    <Typography style={textstyle} className='px-2' variant = "h2" gutterBottom>{text1}</Typography>
                </ThemeProvider>
            </Col>
            <Col xs={{ order: 4 }} md={{ order: 3 }}>
                <ThemeProvider theme={theme}>
                    <hr/>
                    <Typography style={substyle} variant = "h1" gutterBottom>{text2}</Typography>
                </ThemeProvider>
            </Col>
            <Col xs={{ order: 3 }} md={{ order: 4 }}>
                <Image src='https://img.freepik.com/premium-photo/african-farmer-is-using-tablet-background-working-tractor-with-cultivator-field-agriculture-innovate-cultivation-concept_73622-2210.jpg' fluid alt="image2"/>
            </Col>
        </Row>    
    </Container>
  )
}

export default Partnership
