import { Button } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Vision() {
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
          img: 'https://img.freepik.com/free-photo/closeup-shot-delicious-fresh-oranges-tree_181624-14410.jpg',
          title: 'partners',
        },
        {
          img: 'https://img.freepik.com/premium-photo/group-fresh-mangosteen-queen-fruits_35748-7.jpg',
          title: 'partners',
        },
        {
          img: 'https://img.freepik.com/premium-photo/close-up-red-apples_177613-2490.jpg',
          title: 'partners',
        },
      ];

  return (
    <div>
      <Container className='mt-4 pt-4' fluid >
        <Row xs={2} md={1} className="mt-4 g-1 py-4  justify-content-md-center">
            <Col xs={12} md={5}>
              <Box sx={{ width: 500, height: 550, overflowY: 'hidden',margin:'5px' }}>
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
            <Col xs={12} md={5}>
                <h2 style={mainstyle}>About <span style={logostyle}>ORGOFOODS</span></h2>
                <p style={substyle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
                <p style={substyle}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
                <Button component={Link} to="/about" variant="contained" color="success" size="large">See More</Button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Vision
