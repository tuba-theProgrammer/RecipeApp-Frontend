
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

import { useNavigate } from 'react-router-dom';


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// import login urls
import {SERVER_URL} from '../../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../../RequestManager/Request-manager'
import {LOGIN_ADMIN_URL} from '../../../RequestManager/RequestUrls/AdminUrls'


function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
   
  const [getUsername,setUsername] = useState(0)
  const [getPass,setPass] = useState(0)
  const [getResponseData,setResponseData] = useState('data')
  const navigate = useNavigate();
    
  const PassOnchange=(e)=>{
  //  console.log(e.target.value)
    setPass(e.target.value)}

  const UsernameOnchange = (e)=>{
   // console.log(e.target.value)
    setUsername(e.target.value)} 


  function LoginAccount(){

   if(getUsername==0||getPass==0){
    alert("Please Enter Data First")
   }else{
    const requestData={
      "AdminUsername":getUsername,
      "AdminPass":getPass
     }
     const result =  SendRequestToBackend(SERVER_URL,"POST",LOGIN_ADMIN_URL,requestData)
     result.then(
      data=>{
        setResponseData(data)
      }
     )
    
    if(getResponseData.message){
      
      if(getResponseData.resCode ==1002){
        alert(getResponseData.message)
        localStorage.setItem("AdminID",getResponseData._id)
        navigate("/Dashboard")

      }else{
        alert(getResponseData.message)
      }
    }else{
      alert("please enter Data First")
    }
  }
  }



  return (
    <BasicLayout >
      <Card >
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
            Sign in
          </MDTypography>
        
        </MDBox>
        <MDBox pt={5} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Username" fullWidth onChange={UsernameOnchange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth onChange={PassOnchange}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={1} mb={0} textAlign="right">
              <MDTypography
                component={Link}
                to="/ResetPass"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Forget Password
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth
                onClick={LoginAccount}
              >
                sign in
              </MDButton>
            </MDBox>
         
          
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
