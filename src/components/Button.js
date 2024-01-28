import React from "react";
import Data from "../../components/products/Data";
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
      <Grid>
        {menuItems.map((Val, id) => {
          <React.Fragment key={id}>
            <Button variant="contained" color="success" size="large" onClick={() => filterItem("Vegitable")} >Vegitables</Button>
            <Button variant="contained" color="success" size="large" onClick={() => filterItem("Fruit")} >Fruits</Button>
            <Button variant="contained" color="success" size="large" onClick={() => filterItem("Dries")}>Dries</Button>      
          </React.Fragment>
        })}
        <Button variant="contained" color="success" size="large" onClick={() => setItem(Data)} >All</Button>
      </Grid>
  );
};

export default Buttons;