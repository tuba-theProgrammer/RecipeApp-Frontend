
// Material Dashboard 2 React components

import MDTypography from "components/MDTypography";
import {SERVER_URL} from '../../../RequestManager/RequestUrls/generalUrls'
import {SendRequestToBackend} from '../../../RequestManager/Request-manager'
import {DISPLAY_USERS} from '../../../RequestManager/RequestUrls/UsersUrls'
import { useEffect, useState } from "react";


export default function Data() {
  
  return {
    columns: [
      { Header: "Name", accessor: "name", width: "45%", align: "left" },
      { Header: "User Preference", accessor: "pref", align: "left" },
      { Header: "User Genere", accessor: "genere", align: "center" },
     
    ],

    rows: [
      
     
       {
        
        name: (
          <MDTypography component="a" href="#" variant="caption" color="black" fontWeight="medium" fontSize='1rem'>
            Tuba
          </MDTypography>
        ),
        pref: (
          <MDTypography component="a" href="#" variant="caption" color="black" fontWeight="medium" fontSize='1rem'>
            Veg
          </MDTypography>
        ),
        genere: (
          <MDTypography component="a" href="#" variant="caption" color="black" fontWeight="medium" fontSize='1rem'>
            low Carb
          </MDTypography>
        ),
      },
     
     
    ],
  };
}
