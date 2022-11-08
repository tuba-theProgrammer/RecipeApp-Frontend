import { Card, Divider } from "@mui/material";
import MDHeading from "components/MDHeading";

const States = ({ title, value }) => {
  return (
    <Card
      elevation={0}
      style={{ border: "1px solid #7ea69f", borderRadius: "5%" }}
    >
      <div style={{ textAlign: "center", padding: "3%",borderBottom:"1px solid #3CDFFF"}}>
        <MDHeading text={title} fontSize="120%"/>
      
      </div>
      <div style={{ textAlign: "center", padding: "1%", height: "150px" }}>
        {value == null ? (
          <div>
            <img
              src="/setting-up-enviroment-1.gif"
              width="150px"
              height="150px"
            />
          </div>
        ) : (
          <div>
            <MDHeading text={value} fontSize="4rem"/>
            
          </div>
        )}
      </div>
    </Card>
  );
};
 
export default States;
