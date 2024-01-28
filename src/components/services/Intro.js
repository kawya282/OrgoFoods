import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';

function Intro() {
    const imageUrl = 'https://img.freepik.com/premium-photo/image-basket-with-tomatoes-onions-other-vegetables_674594-11319.jpg';

    const mainstyle = {
        padding:'5%',
        color: '#6ab04c',
        fontSize: '45px',
        fontFamily: 'Courgette'
      }
    
      const logostyle = {
        color: "green",
        fontWeight: 800,
        fontSize: "50px"
      }

      const substyle = {
        fontFamily: 'Courgette',
        paddingBottom: '5%',
        color: '#312f2f',
        fontSize: "20px"
      }
  return (
    <div>
      <Container className='mt-4 pt-4' fluid >
        <Row xs={2} md={1} className="mt-4 g-1 py-4  justify-content-md-center">
            <Col xs={12} md={12} xl={6}>
            <h3 style={mainstyle}>Welcome to <span style={logostyle}>ORGOFOODS</span> an E-Commerce website</h3>
            <h6 style={substyle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the 
                    coast of the Semantics, a large language ocean. But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged 
                    her into their agency, where they abused her for their.</h6>
            </Col>
            <Col xs={12} md={12} xl={5}>
                <Image src={imageUrl} alt="Description"  width={'100%'} style={{borderRadius:'15px'}}/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
