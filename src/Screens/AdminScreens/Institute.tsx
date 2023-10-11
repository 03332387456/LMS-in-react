
import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import QuizIcon from '@mui/icons-material/Quiz';
import Login from "../../UserScreens/Login";
import Signup from "../../UserScreens/Signup";
import StudentMang from "./StudentMang";
import Admin from "./Admin";


const drawerWidth = 240;



function Institute() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate()


  let logout = () => {
    navigate('/Login')
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        

        <ListItemButton component={Link} to="/Course" onClick={handleDrawerToggle}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Course Catalog" />
        </ListItemButton>


        <ListItemButton component={Link} to="/StudentMang" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <PanToolAltIcon />
              </ListItemIcon>
              <ListItemText primary="Student Management" />
            </ListItemButton>
            





        <ListItemButton component={Link} to="/Login" onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>







      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          Institute
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
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
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="/Signup" element={<Signup/>} />
          {/* <Route path="/" element={<StudentMang/>} /> */}
          <Route path="/" element={<Admin/>} />
        
        </Routes>
      </Box>
    </Box>
  );
}

export default Institute;
