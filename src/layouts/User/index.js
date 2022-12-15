
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect,useState } from "react";


import {SERVER_URL} from '../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../RequestManager/Request-manager'
import {DISPLAY_USERS} from '../../RequestManager/RequestUrls/UsersUrls'

// Data
import UserTableData from "layouts/User/data/UserData";

function Tables() {
  const { columns, rows } = UserTableData()
  const [getdata,setData]=useState([])
  const [user,setUser]= useState([
    
  ])   

  useEffect(()=>{
   UserData() 
  },[])

   
  function UserData(){
    const result =  SendRequestToBackend(SERVER_URL,"GET",DISPLAY_USERS,'')
    result.then(
     data=>{
      console.log(data)
     setUser(data.Data)
  //    const updataList = user.Data.map((item) => {
   
  //     if (user.Data.length > 0) {
  //       user.Data.forEach((item) => {
  //         if (item) {
  //           return {
  //             User_Preferences:item.User_Preferences,
  //             User_genere:item.User_genere
  //           };
  //         }
  //       });

      
  //     }
  //   });
  //  console.log("here ",updataList)
  //   setData(updataList)
     }
    )

    
  

  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                 Users 
                </MDTypography>
              </MDBox>
              <table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Preference</th>
                    <th>Genere</th>
                </tr>
            </thead>
 
            <tbody>
                {user.map(item =>
                    <tr>
                       <td>tuba</td>
                        <td>{item.User_Preferences}</td>
                        <td>{item.User_genere}</td>
                       
                    </tr>
                )}
            </tbody>
        </table>
            </Card>
          </Grid>
         
        </Grid>
      </MDBox>
   
    </DashboardLayout>
  );
}

export default Tables;
