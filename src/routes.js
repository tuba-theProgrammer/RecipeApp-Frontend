
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Recipes from "layouts/Recipes";
import Categories from "layouts/Categories";
import Users from "layouts/User";
import ChangePass from "layouts/ChangePass";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Statistics",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Categories",
    key: "Categories",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/Categories",
    component: <Categories />,
  },
  {
  
    type: "collapse",
    name: "Recipes",
    key: "Recipes",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/Recipes",
    component: <Recipes />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/Users",
    component: <Users />,
  },
 
  {
    type: "collapse",
    name: "Change Pass",
    key: "ChangePass",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/ChangePass",
    component: < ChangePass/>,
  },

 
];

export default routes;
