import React from 'react'
import { Grid} from '@mui/material'
import Item from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProductCard({product}) {
  return (
    <div>
        <Grid container spacing={{xs:0, sm:0 , md:3}} columns={{ xs: 12, sm: 12, md: 6, xl: 4, xxl: 3 }}  sx={{marginR:'15px'}}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                            <Item>
                                <Card sx={{ maxWidth: 345 ,justifyContent:'center', border:'1px solid green',marginTop:'15px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Item>            
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default ProductCard
