import React, { useState } from 'react'
import './Shop.css'
import Navigation from '../../components/navbar/Navigation'
import HeaderTwo from '../../components/headers/HeaderTwo'
import Data from "../../components/products/Data";
import ProductCard from '../../components/products/ProductCard';
import FilterButton from '../../components/FilterButton';
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid';

function Shop() {
  const [product, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div>
      <Navigation/>
      <HeaderTwo page="SHOP"/>
      <Grid container>
        <Grid item>
          <Item sx={{ textAlign: 'center', marginTop: '30px',paddingTop: '15px' }}>
            <h1>All Products</h1>
          </Item>
        </Grid>
        <FilterButton filterItem={filterItem} setItem={setItem} menuItems={menuItems}/>
        <ProductCard product={product} />
      </Grid>
      <h1>Shop page</h1>
    </div>
  )
}

export default Shop
