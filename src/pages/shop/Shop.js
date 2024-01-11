import React, { useState } from 'react'
import './Shop.css'
import Navigation from '../../components/navbar/Navigation'
import HeaderTwo from '../../components/headers/HeaderTwo'
import Data from "./Data";
import ProductCard from '../../components/products/ProductCard';

function Shop() {
  /*const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };*/

  return (
    <div>
      <Navigation/>
      <HeaderTwo page="SHOP"/>
      <ProductCard/>
      {/*<>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">All Products</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
  </>*/}
      <h1>Shop page</h1>
    </div>
  )
}

export default Shop
