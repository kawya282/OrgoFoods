import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Services() {
    const iconstyel ={
        color: 'white',
        fontSize: 150, 
        borderRadius:'50%', 
        padding:'10px', 
        marginBottom:'10px', 
        cursor:'pointer', 
    }

    const textstyle = {
        paddingTop: "7%"
    }
    return (
        <Container fluid className='my-4'>
            <Row xs={4} md={1} className="mt-4 g-1 justify-content-md-center">
                <Col xs={12} md={3} xl={2}>
                    <LocalShippingIcon style={iconstyel} sx={{ backgroundColor:'#a393b5', '&:hover': { backgroundColor: '#5f207a' } }}/>
                    <h5 style={textstyle}>FREE SHIPPING</h5>
                </Col>
                <Col xs={12} md={3} xl={2}>
                    <VerifiedIcon style={iconstyel} sx={{ backgroundColor:'#f0a962', '&:hover': { backgroundColor: '#c45a33' }}}/>
                    <h5 style={textstyle}>ALWAYS FRESH</h5>
                </Col>
                <Col xs={12} md={3} xl={2}>
                    <AddShoppingCartIcon style={iconstyel} sx={{ backgroundColor:'#a9f062','&:hover': { backgroundColor: '#219449' } }}/>
                    <h5 style={textstyle}>SHOPPING EASY</h5>
                </Col>
                <Col xs={12} md={3} xl={2}>
                    <SupportAgentIcon style={iconstyel} sx={{ backgroundColor:'#e07b7b', '&:hover': { backgroundColor: '#730f46' } }}/>
                    <h5 style={textstyle}>CUSTOMER CARE</h5>
                </Col>
            </Row>
        </Container>  
    )
}

export default Services
