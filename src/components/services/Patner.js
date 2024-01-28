import { Button } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Patner() {
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

  const itemData = [
    {
      img: 'https://img.freepik.com/premium-photo/two-indian-farmers-working-discuss-green-cotton-field_54391-5785.jpg',
      title: 'partners',
    },
    {
      img: 'https://img.freepik.com/free-photo/side-view-smiley-women-working-together_23-2149894738.jpg',
      title: 'partners',
    },
    {
      img: 'https://img.freepik.com/premium-photo/indian-farmer-discussing-with-agronomist-farm-collecting-some-information_75648-6910.jpg',
      title: 'partners',
    },
  ];
  return (
    <div>
      <Container className='mt-4 pt-4' fluid >
        <Row xs={2} md={1} className="mt-4 g-1 py-4  justify-content-md-center">
            <Col xs={12} md={6}>
                <h2 style={mainstyle}>Grow your business as a <span style={logostyle}>ORGOFOODS</span> patner</h2>
                <p style={substyle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
                <Button component={Link} to="/joinus" variant="contained" color="success" size="large">JoinUs</Button>
            </Col>
            <Col xs={12} md={6}>
              <Box sx={{ width: 500, height: 550, overflowY: 'hidden' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    />
                  </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Patner
