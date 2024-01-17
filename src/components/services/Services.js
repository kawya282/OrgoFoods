import React from 'react'
import { Grid} from '@mui/material'
import Item from '@mui/material/Grid'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Services() {
    return (
        <Grid container spacing={3} columns={{ xs: 12, sm: 8, md: 12}} justifyContent={'center'} marginTop={'50px'}>
            <Grid item>
                <Item>
                    <LocalShippingIcon sx={{ color: 'white' , fontSize: 150, backgroundColor:'#a393b5', borderRadius:'50%', padding:'10px', marginBottom:'10px', cursor:'pointer', '&:hover': { backgroundColor: '#5f207a' } }}/>
                    <h5>FREE SHIPPING</h5>
                </Item>
            </Grid>
            <Grid item>
                <Item>
                    <VerifiedIcon sx={{ color: 'white' , fontSize: 150 , backgroundColor:'#f0a962', borderRadius:'50%', padding:'10px', marginBottom:'10px', cursor:'pointer', '&:hover': { backgroundColor: '#c45a33' }}}/>
                    <h5>ALWAYS FRESH</h5>
                </Item>
            </Grid>
            <Grid item>
                <Item>
                    <AddShoppingCartIcon sx={{ color: 'white' , fontSize: 150, backgroundColor:'#a9f062', borderRadius:'50%', padding:'10px', marginBottom:'10px', cursor:'pointer', '&:hover': { backgroundColor: '#219449' } }}/>
                    <h5>SHOPPING EASY</h5>
                </Item>
            </Grid>
            <Grid item>
                <Item>
                    <SupportAgentIcon sx={{ color: 'white' , fontSize: 150, backgroundColor:'#e07b7b', borderRadius:'50%', padding:'10px', marginBottom:'10px', cursor:'pointer', '&:hover': { backgroundColor: '#730f46' } }}/>
                    <h5>CUSTOMER CARE</h5>
                </Item>
            </Grid>
        </Grid>    
    )
}

export default Services
