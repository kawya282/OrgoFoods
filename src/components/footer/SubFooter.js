import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function SubFooter() {
  return (
    <div>
      <Container fluid>
        <Row xs={1} md={2} style={{backgroundColor:'#527853', padding:'10px'}}>
          <Col>
            <span>© 2024 Copyright | Terms & Policy</span>
          </Col>
          <Col className='px-4'>
            <WhatsAppIcon color="action"/>
            <FacebookRoundedIcon color="action"/>
            <YouTubeIcon color="action"/>
            <InstagramIcon color="action"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SubFooter
