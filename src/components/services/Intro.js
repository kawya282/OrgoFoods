import React from 'react'
import { Grid} from '@mui/material'
import Item from '@mui/material/Grid'

function Intro() {
    const imageUrl = 'https://img.freepik.com/premium-photo/image-basket-with-tomatoes-onions-other-vegetables_674594-11319.jpg';
  return (
    <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12}} marginTop={'50px'}>
        <Grid item xs={12} sm={7} md={7} marginBottom={'20px'}>
            <Item>
                <h3>Welcome to Orgofoods an eCommerce website</h3>
                <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the 
                    coast of the Semantics, a large language ocean.</h6>
                <h6>But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged 
                    her into their agency, where they abused her for their.</h6>
            </Item>
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
            <Item>
                <img src={imageUrl} alt="Description"  width={'100%'}/>
            </Item>
        </Grid>
    </Grid>
  )
}

export default Intro
