import { Grid,Card,Avatar,Icon,Tooltip } from '@mui/material'

import MDTypography from 'components/MDTypography'
import MaterialTable from 'material-table'
import MDBox from 'components/MDBox'
import MDBadge from 'components/MDBadge'
import { useState } from 'react'

function ViewAllCategories() {


    return (
<>
<Grid container marginTop='5rem'  marginLeft='2rem' >
<Grid item xs={11}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
               
                bgColor="#D8F9FF"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="Black">
                 View All Categories
                </MDTypography>
              </MDBox>

              <div >
        <MaterialTable
          columns={[
            { title: 'Category Name', field: 'name',width:'40%' },
            { title: 'Recipe Country', field: 'country',width:'40%'  },
            { title: 'Category Type', field: 'type',width:'40%'  },
          
          ]}
          data={[{ name: 'Name', country: 'Baran', type: 'odnh' }]}
          title=""
          options={{
         
            rowStyle: {
                fontSize: '12px',
            },
            filter: true,
            exportButton: true,
            tableLayout: "auto",
            sorting: true,
            actionsColumnIndex: -1}}
          
        />
      </div>
              </Card>
</Grid>

</Grid>
</>
      
    )
  }

  export default ViewAllCategories