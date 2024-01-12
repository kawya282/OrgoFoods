import React from 'react'
import Data from "../components/products/Data";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

function FilterButton({ filterItem, setItem, menuItems }) {
  return (
    <Grid>
      {menuItems.map((category, id) => (
        <Button
          key={id}
          variant="contained"
          color="success"
          size="large"
          onClick={() => filterItem(category)}
        >
          {category}
        </Button>
      ))}
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => setItem(Data)}
      >
        All
      </Button>
    </Grid>
  )
}

export default FilterButton
