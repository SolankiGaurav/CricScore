import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MatchComp from './MatchComp';
import { getCurrentMatches } from '../api/CricApi';
import { Button } from '@mui/material';
import MatchDetail from './MatchDetail';
import { SportsCricket } from '@mui/icons-material';
import '../App.css';

const drawerWidth = 240;

function Sidenav(props) {

  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const [modList, setModList] = useState([]);

  useEffect(() => {
    getCurrentMatches().then(data => {
      console.log(data);
      setMatches(data.data);
      setModList(data.data);
      // setModList([]);
    })
  },[]);



  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuCLick = (query) => {
    const modList = matches.filter(f => f.matchType.includes(query));
    setQuery(query);
    setModList(modList);
  }

  const drawer = (
    <div className='cricBack'>
      <Toolbar className='ballGif' />
      <Divider>Menu</Divider>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuCLick("")}>
            <ListItemText primary="All Matches" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuCLick("t20")}>
            <ListItemText primary="Twenty-Twenty " />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuCLick("odi")}>
            <ListItemText primary="ODI Matches" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleMenuCLick("test")}>
            <ListItemText primary="Test Matches" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
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
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="ballDiv me-2">
          <img src="./logo12.jpg" className='bouncingBall ' alt="not found" />
          </div>
          <Button>
          <Typography style={{color:'white'}} className='fw-bold' sx={{ typography: { xs: 'h5', md: 'h4' } }} noWrap component="div">
            Cricket Score
          </Typography>
          </Button>
        </Toolbar>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div className="container-fluid mt-5">
          <MatchComp matches={modList} query={query} />
        </div>
       
      </Box>
    </Box>
  );
}


export default Sidenav;