
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import { useNavigate } from 'react-router-dom';

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from 'assets/images/BackgroundImage.png'
// import login urls
import {SERVER_URL} from '../../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../../RequestManager/Request-manager'
import {ADMIN_RESET_PASS_URL} from '../../../RequestManager/RequestUrls/AdminUrls'
import { useState } from "react";


function Cover() {
  const navigate = useNavigate();
  const [getResponseData,setResponseData] = useState('data')
  const [getBtnStatus,setBtnStatus] = useState(false)
  const [getEmail,setEmail] = useState(0)
 
  const EmailOnchange = (e)=>{
   // console.log(e.target.value)
  
    setEmail(e.target.value)} 
    
 function ResetPass(){
  
 if(getEmail==0){
  alert("Please Enter Data First")
 }else{
setBtnStatus(true)
alert("Wait for Otp to receive on your mail")
localStorage.setItem("AdminEmail",getEmail)
navigate("/ResetCode")
console.log(getResponseData)
const requestData={
  "Email":getEmail,
 }
 const result =  SendRequestToBackend(SERVER_URL,"POST",ADMIN_RESET_PASS_URL,requestData)
 result.then(
  data=>{
    setResponseData(data)
  }
 )

if(getResponseData.message){
  
  if(getResponseData.resCode ==1011){
    alert(getResponseData.message)
  
  }else{
    alert(getResponseData.message)
  }
}
 }
 }

  return (
    <BasicLayout>
      <Card>
        <MDBox
        
          bgColor="#D8F9FF"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="Black" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="Black" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput type="email" label="Email" variant="standard" fullWidth  onChange={EmailOnchange}/>
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton variant="gradient" color="info" 
              disabled={getBtnStatus}
              fullWidth onClick={
                ()=>{
                  
                  ResetPass()
                }
              }>
                reset
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
