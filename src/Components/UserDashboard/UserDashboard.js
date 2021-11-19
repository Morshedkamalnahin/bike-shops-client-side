import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";

import useAuth from "../../Hooks/UseAuth";
import UserDashboardHome from "../UserDashboardHome/UserDashboardHome";
import MyOrders from "../MyOrders/MyOrders";
import Reviews from "../Reviews/Reviews";
import './UserDashboard.css'
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import ManageOrder from "../ManageOrder/ManageOrder";
import AdminRoute from "../AdminRoute/AdminRoute";



const drawerWidth = 240;

function UserDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [isAdmin, setIsAdmin] = React.useState(false);

  const { user, logOutUser, isAdmin } = useAuth();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();

  const drawer = (
    <div>
      <div className="text-center my-3">
        {/* <img width="100px" src={logo} alt="" /> */}
      </div>
      <Divider />
      <List>
        {!isAdmin && <div className="dash-menu">
          <NavLink className='dash-menuLink' to={`${url}`}> <i className="fas fa-house-user"></i> Dashboard Home</NavLink>
          <NavLink className='dash-menuLink' to={`${url}/myOrders`} >
            <i className="fas fa-list-alt"></i> My Orders
          </NavLink>
          <NavLink to={`${url}/payment`} className='dash-menuLink'>
            <i className="fas fa-money-check-alt"></i> Payment
          </NavLink>
          <NavLink to={`${url}/reviews`} className='dash-menuLink'>
            <i className="fas fa-search"></i> Review
          </NavLink>
          <NavLink to="/home" className='dash-menuLink'>
            <i className="fas fa-home"></i> Back to Home
          </NavLink>
          <button onClick={logOutUser} className="btn-now px-4 py-1 w-75">
            Sign Out
          </button>
        </div>
        }
        
         {isAdmin && <div className="dash-menu">
          <NavLink className='dash-menuLink' to={`${url}`} ><i className="fas fa-house-user"></i> Dashboard Home</NavLink>
          <NavLink to={`${url}/manageOrders`} className='dash-menuLink'>
          <i className="fas fa-tasks"></i> Manage All Orders
          </NavLink>
          <NavLink to={`${url}/addProducts`} className='dash-menuLink'>
          <i className="fas fa-plus-circle"></i> Add a Products
          </NavLink>
          <NavLink to={`${url}/manageProducts`} className='dash-menuLink'>
          <i className="fas fa-cog"></i> Manage Products
          </NavLink>
          <NavLink to={`${url}/makeAdmin`} className='dash-menuLink'>
          <i className="fas fa-user-plus"></i> Make an admin
          </NavLink>
          <NavLink to="/home" className='dash-menuLink'>
            <i className="fas fa-home"></i> Back to Home
          </NavLink>
          <button onClick={logOutUser} className="btn-now px-4 py-1 w-75">
            Sign Out
          </button>
        </div>
         }
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="appbar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <div className="row d-flex align-items-center">
          <div className="col-lg-8">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Dashboard
              </Typography>
            </Toolbar>
          </div>
          <div className="col-lg-4">
            <h5>{user?.displayName}</h5>
          </div>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
             <UserDashboardHome></UserDashboardHome>
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route exact path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrder></ManageOrder>
          </AdminRoute>
          <AdminRoute exact path={`${path}/addProducts`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageProducts`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

UserDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UserDashboard;
