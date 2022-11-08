


// @mui material components
import Grid from "@mui/material/Grid";

// @mui material components

// Material Dashboard 2 React components
import Heading from 'components/MDHeading'
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Container } from "@mui/system";
// @mui material components


import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function ChangePass() {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            text={"Change Pass"}
         
            fontSize="2rem"
            fontWeight="bold"
          />
           </Grid>
       
         </Grid>
         </Grid>
         <Grid item>

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
       Change Pass
        </MDTypography>
      
      </MDBox>
        <MDBox pt={5} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
            <InputLabel htmlFor="outlined-adornment-password" >Your Password</InputLabel>
          <OutlinedInput
       
            id="outlined-adornment-password"
            fullWidth
            sx={{marginTop:'1rem'}}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
            </MDBox>
            <MDBox mb={2}>
            <InputLabel htmlFor="outlined-adornment-password" >New Password</InputLabel>
          <OutlinedInput
       
            id="outlined-adornment-password"
            fullWidth
            sx={{marginTop:'1rem'}}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
            </MDBox>
            <MDBox mb={2}>
            <InputLabel htmlFor="outlined-adornment-password" >Confirm Password</InputLabel>
          <OutlinedInput
       
            id="outlined-adornment-password"
            fullWidth
            sx={{marginTop:'1rem'}}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
            </MDBox>
           
            <MDBox mt={4} mb={1} display="flex"   justifyContent= 'center'>
              <MDButton variant="gradient" color="info"   sx={{width:"60%"}}
            
              >
             Change Password
              </MDButton>
            </MDBox>
         
          
          </MDBox>
        </MDBox>
      </Card>
  
    </Container>
         </Grid>
      
    </Grid>
             </Grid>
    
          </Grid>
    

    </Grid>




   
    </DashboardLayout>
  );
}

export default ChangePass;
