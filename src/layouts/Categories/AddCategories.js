

// @mui material components
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
// @mui material components

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useState } from "react";

// import login urls
import {SERVER_URL} from '../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../RequestManager/Request-manager'
import {CAT_CREATE_URL} from '../../RequestManager/RequestUrls/categoryUrls'



function AddCategories(){

   const [getCatName,setCatName]= useState(0)
   const [getCatType,setCatType]= useState(0)
   const [getRecCountry,setRecCountry]= useState(0)
   const [getResponseData,setResponseData] = useState('data')
   
   const NameOnchange=(e)=>{
     console.log(e.target.value)
      setCatName(e.target.value)}


      const TypeOnchange=(e)=>{
         console.log(e.target.value)
          setCatType(e.target.value)}
    
          const CountryOnchange=(e)=>{
              console.log(e.target.value)
              setRecCountry(e.target.value)}
        


   function CreateCategory(){
    console.log("call")
    if(getCatName==0||getCatType==0||getRecCountry==0){
      alert("Please Enter Data First")
     }else{
      const requestData={
        "Category_name":getCatName,
        "Recipe_Country":getRecCountry,
        "Recipe_type":getCatType
       }
       const result =  SendRequestToBackend(SERVER_URL,"POST",CAT_CREATE_URL,requestData)
       result.then(
        data=>{
          setResponseData(data)
        }
       )
      
      if(getResponseData.message){
        
        if(getResponseData.resCode ==1002){
          alert(getResponseData.message)
          
        }else{
          alert(getResponseData.message)
        }
      }else{
        alert("please enter Data First")
      }
    
    }
   }

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
       Add Categories
        </MDTypography>
      
      </MDBox>
        <MDBox pt={5} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Category Name" fullWidth  onChange={NameOnchange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Receipe Country" fullWidth onChange={CountryOnchange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Receipe Type" fullWidth onChange={TypeOnchange}/>
            </MDBox>
           
            <MDBox mt={4} mb={1} display="flex"   justifyContent= 'center'>
              <MDButton variant="gradient" color="info"   sx={{width:"60%"}}
             onClick={
              ()=>{
                CreateCategory()
              }
             
             }
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
  
  export default AddCategories;