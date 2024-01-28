import React from 'react'
import { Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Groups2Icon from '@mui/icons-material/Groups2';
import BusinessIcon from '@mui/icons-material/Business';


function Partners() {
    const mainstyle = {
        padding:'5%',
        color: '#6ab04c',
        fontSize: '45px',
        fontFamily: 'Courgette'
      }

  return (
    <div>
      <Container fluid className='mx-auto'>
        <h1 style={mainstyle}>Boost your outcomes with partner benifits</h1>
        <Row xs={3} md={1} className="mt-4 g-1 justify-content-center">
            <Col xs={12} md={3} className='mx-2'>
                <Card sx={{ maxWidth: 345 , border: '3px solid #F28585'}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{color:'#F28585'}}>
                                <PersonIcon sx={{ color: '#F28585' }}/> Reach new Auidence
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col xs={12} md={3} className='mx-2'>
                <Card sx={{ maxWidth: 345 , border: '3px solid #FDE767'}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{color:'#FDE767'}}>
                                <Groups2Icon sx={{ color: '#FDE767' }}/> Drive Revenue
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col xs={12} md={3} className='mx-2'>
                <Card sx={{ maxWidth: 345,  border: '3px solid #0A1D56' }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{color:'#0A1D56'}}>
                                <BusinessIcon sx={{ color: '#0A1D56' }}/> Advance your Business
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
        </Row>
      </Container>      
    </div>
  )
}

export default Partners
