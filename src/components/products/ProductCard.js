import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';


function ProductCard({product}) {
  
  return (
    <div>
      <Container fluid className='mt-5 pt-4'>
        <Row className="g-1 mx-auto justify-content-md-center">
            {product.map((item) => (
            <Col xs={12} md={4} xl={3} className='mx-1 my-2'>
                <Card sx={{ maxWidth: 345, border: '2px solid white', boxShadow: '5px lightgreen'}}>
                    <CardActionArea>
                        <CardMedia component="img" src={item.img} alt={item.title} height="140" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" variant="contained" color="success" fullWidth>
                        Add to Cart
                        </Button>
                    </CardActions>
                </Card>
            </Col>
            ))}
        </Row>
      </Container>        
    </div>
  )
}

export default ProductCard
