
// @mui material components
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

// Material Dashboard 2 React components
import Heading from 'components/MDHeading'

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDStates from 'components/MDStates'
import { useEffect, useState } from "react";


// import login urls
import {SERVER_URL} from '../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../RequestManager/Request-manager'
import {COUNT_REC} from '../../RequestManager/RequestUrls/RecipeUrls'
import {COUNT_CAT} from '../../RequestManager/RequestUrls/categoryUrls'
import {COUNT_USERS} from '../../RequestManager/RequestUrls/UsersUrls'

function Dashboard() {
  
  const [recipeCount,setRecipeCount]=useState(0)
  const [catCount,setCatCount]=useState(0)
  const [UserCount,setUserCount]=useState(0)


  useEffect(()=>{
    RecipeCountApiCall()
    CategoryCountApiCall()
    UserCountApiCall()
  },[])


  function RecipeCountApiCall(){
    const result =  SendRequestToBackend(SERVER_URL,"GET",COUNT_REC,'')
    result.then(
     data=>{
      console.log(data)
       setRecipeCount(data.Count)
     }
    )
   
  }

  function CategoryCountApiCall(){
    const result =  SendRequestToBackend(SERVER_URL,"GET",COUNT_CAT,'')
    result.then(
     data=>{
      console.log(data)
       setCatCount(data.Count)
     }
    )
   
  }
  
  function UserCountApiCall(){
    const result =  SendRequestToBackend(SERVER_URL,"GET",COUNT_USERS,'')
    result.then(
     data=>{
      console.log(data)
       setUserCount(data.Count)
     }
    )
  }
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid 
        container
       
       
        direction="column"
        >
          <Grid item>
              <Grid container direction="row">
              <Grid item xs={12} style={{borderBottom:"2px solid #3CDFFF"}}>
              <Heading
            text={"Welcome To Recipe Admin Panel"}
         
            fontSize="2rem"
            fontWeight="bold"
          />
           </Grid>
       
         </Grid>
         </Grid>
         <Grid item>
       
          <Container>

      <div>
       
        
      </div>
      <div style={{ paddingLeft: "5%" }}>
        <Grid container style={{ marginTop: "7%",paddingLeft:"15%",paddingRight:"15%"}}>

          <Grid item xs={5} style={{marginTop:"1%"}}>
            < MDStates title="Users" value={UserCount} />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5} style={{marginTop:"1%"}}>
            < MDStates title="Recipes" value={recipeCount} />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={5} style={{marginTop:"3%"}}>
            < MDStates title="Categories" value={catCount} />
          </Grid>
          <Grid item xs={3}></Grid>
      


        </Grid>
      </div>
    </Container>
    </Grid>
    </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
