import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProductCard({product}) {
  return (
    <div>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {product.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, border: '5px solid green', marginTop: '15px' }}>
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
                        <Button size="small" variant="contained" color="success">
                        Add to Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default ProductCard
