


// @mui material components
import Grid from "@mui/material/Grid";

// @mui material components

// Material Dashboard 2 React components
import Heading from 'components/MDHeading'
import { useState } from "react";
import { Divider } from "@mui/material";


import MDButton from "components/MDButton";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import AddRecipes from "./AddRecipes";
import ViewAllRecipes from "./ViewAllRecipes";




function Categories() {
  const [currentOpenedScreen, setCurrentOpenedScreen]= useState(<AddRecipes/>);
 
   const handleScreenChange=(index)=>{
    switch(index) {
      case 0:
        setCurrentOpenedScreen(<AddRecipes/>)
      break;
      case 1:
        setCurrentOpenedScreen(<ViewAllRecipes/>)
      break;
    }
  }
  return (
    <DashboardLayout>
      <DashboardNavbar  />
     
      <Grid 
        container
        direction="column"
        >
          <Grid item>
              <Grid container direction="row">
              <Grid item xs={12} style={{borderBottom:"2px solid #3CDFFF"}}>
              <Heading
            text={"Recipes"}
         
            fontSize="2rem"
            fontWeight="bold"
          />
           </Grid>
       
         </Grid>
         </Grid>
         <Grid item>

        
      <Grid container>
           
            <Grid item xs={2} >
           
              <div style={{marginTop:"5%",padding:"5%",borderRight: "1px solid #7ea69f"}}>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(0)}}>
            
                <MDButton type="secondary" shape="round" style={{width:"100%"}} size={"middle"} >Add Recipes</MDButton>
  
                </div>
                <Divider/>
                <div style={{margin:"5%",cursor: "pointer"}} onClick={() =>{handleScreenChange(1)}}>
                <MDButton type="secondary" shape="round" style={{width:"100%"}} size={"middle"} >View All Recipes</MDButton>
                </div>
                <Divider/>
              </div>
            </Grid>
            <Grid item xs={10}>
            
              {currentOpenedScreen}
            </Grid>
          </Grid>
          </Grid>
    

    </Grid>




   
    </DashboardLayout>
  );
}

export default Categories;
