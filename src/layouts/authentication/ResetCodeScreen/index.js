
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


import { useNavigate } from 'react-router-dom';

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from 'assets/images/BackgroundImage.png'
import { useState } from "react";

import {SERVER_URL} from '../../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../../RequestManager/Request-manager'
import {ADMIN_OTP_CHANGE_PASS_URL} from '../../../RequestManager/RequestUrls/AdminUrls'

function Cover() {
  const navigate = useNavigate();
  const [Code,setCode] = useState(0)
  const [Pass,setPass] = useState(0)
  const [ConfirmPass,setConPass]= useState(0)
  const [getResponseData,setResponseData] = useState(0)



  const CodeOnchange = (e)=>{
   // console.log(e.target.value)
    setCode(e.target.value)} 

    const PassOnchange = (e)=>{
      //console.log(e.target.value)
      setPass(e.target.value)} 


      const ConPassOnchange = (e)=>{
       // console.log(e.target.value) 
        setConPass(e.target.value)} 


  function ResetCode(){
    if(Code==0||Pass==0||ConfirmPass==0){
      alert("Please Enter Data First")
    }else{
    if(Pass!=ConfirmPass){
      alert("Mismatch password and Confirm Password")
    }else{
    const requestData={
      "Email": localStorage.getItem("AdminEmail"),
      "Code":Code,
      "newPass":Pass
     }
     const result =  SendRequestToBackend(SERVER_URL,"POST",ADMIN_OTP_CHANGE_PASS_URL,requestData)
     result.then(
      data=>{
        setResponseData(data)

      }
     )
    
    if(getResponseData.message){
      
      if(getResponseData.resCode ==1011){
        alert(getResponseData.message)
        navigate("/")
        
      }else{
        alert(getResponseData.message)
      }
    }
  }
}
  }


  return (
    <BasicLayout >
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
            Verification
          </MDTypography>
          <MDTypography display="block" variant="button" color="Black" my={1}>
            Enter Code that you recieve on your email
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput type="text" label="Verification Code" variant="outlined"  fullWidth onChange={CodeOnchange}/>
            </MDBox>
            <MDBox mb={4}>
              <MDInput type="text" label="New Password" variant="outlined"  fullWidth onChange={PassOnchange} />
            </MDBox>
            <MDBox mb={4}>
              <MDInput type="text" label="Confirm Password" variant="outlined"  fullWidth onChange={ConPassOnchange} />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={ResetCode}>
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
