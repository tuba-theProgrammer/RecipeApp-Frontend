

// @mui material components
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";




// import login urls
import {SERVER_URL} from '../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../RequestManager/Request-manager'
import {SHOW_ALL_CAT} from '../../RequestManager/RequestUrls/categoryUrls'


function AddRecipes(){
  const [getCategories, setCategories] = useState([{
    Category_name:'none'
  }])
  
   useEffect(()=>{
    getAllCat()
   },[0])


   function getAllCat(){
    const result =  SendRequestToBackend(SERVER_URL,"GET",SHOW_ALL_CAT,'')
    result.then(
     data=>{
      console.log(data)
       setCategories(data)
     }
    )
   
   }




  const handleChange = (event) => {
    setCategories(event.target.value);
  };
    return(
      <>
       <Grid Container  >
             
             <Grid item xs={6} display="flex" alignItems="center" justifyContent="flex-end" >
         <Grid Container>
         <Container sx={{marginTop:"3rem"}}>
          
          <Card sx={{width:"200%"}} >
          <MDBox
        
        bgColor="#D8F9FF"
        borderRadius="lg"
        coloredShadow="info"
        mx={3}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="black" mt={1}>
       Add Recipes
        </MDTypography>
      
      </MDBox>
        <MDBox pt={5} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
            <InputLabel id="demo-simple-select-label">Categories List</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={getCategories}
          label="Categories"
          onChange={handleChange}
          fullWidth
          
        >
          {
            getCategories.Data.map((item)=>{
              return(
                <MenuItem value={item.Category_name}>{item.Category_name}</MenuItem>
                
              )
            })
          }
         
        </Select>
   
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Recipe Name" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Receipe Time" fullWidth/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Ingredient List" fullWidth/>
            </MDBox>

            <MDBox mb={2}>
              <MDInput type="text" label="Making Procedure" fullWidth  multiline/>
            </MDBox>
           
            <MDBox mt={4} mb={1} display="flex"   justifyContent= 'center'>
              <MDButton variant="gradient" color="info"   sx={{width:"60%"}}
            
              >
             Add
              </MDButton>
            </MDBox>
         
          
          </MDBox>
        </MDBox>
      </Card>
  
    </Container>
         </Grid>
      
    </Grid>
             </Grid>
      </>
    )
  }
  
  export default AddRecipes;