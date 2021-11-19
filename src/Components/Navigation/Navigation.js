import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './Navigation.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import { Button, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { textAlign } from '@mui/system';

const Navigation = () => {

  const { user, logOutUser } = useAuth();

  const theme = useTheme()
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important'
      }
    },
  })

  const { navIcon, navItemContainer } = useStyle();

  const [state, setState] = React.useState(false);

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItem button>
          <ListItemText>
            <NavLink style={{ color: 'navy', margin: '0 15px', textDecoration: 'none' }} to='/home'>Home</NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <NavLink style={{ color: 'navy', margin: '0 15px', textDecoration: 'none' }} to='/explore'>Explore</NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            {user?.email && <NavLink style={{ color: 'navy', margin: '0 15px', textDecoration: 'none' }} to="/userDashboard" activeClassName="selected">
              Dashboard
            </NavLink>
            }
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemText>
            {
              user?.email ? <Button style={{ color: 'navy', margin: '0 0px', textDecoration: 'none' }} onClick={logOutUser}>Log Out</Button>
                : <NavLink className="logIn-btn" style={{ color: 'navy', padding: '0 0px', textDecoration: 'none' }} to='/logIn'>Log In</NavLink>
            }
          </ListItemText>
        </ListItem>

      </List>

    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: 1 }}>
          <Box>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: 'black' }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              {/* <img src={carLogo} width='70px' className='py-1' alt="" /> */}
              <Typography variant='h6' sx={{ fontSize: '28px', ml: 1, color: 'black' }}>
                <span> <span style={{ fontSize: '40px', color: '#9d183b' }}>B</span>ike</span> <span>Shops</span>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Box sx={{ ml: 15 }} className={navItemContainer}>
                  <NavLink style={{ color: 'navy', margin: '0 15px', textDecoration: 'none' }} to='/home'>Home</NavLink>
                  <NavLink style={{ color: 'navy', margin: '0 15px', textDecoration: 'none' }} to='/explore'>Explore</NavLink>
                  {user?.email && <NavLink style={{ color: 'navy', margin: '0 15px', textDecoration: 'none' }} to="/userDashboard" activeClassName="selected">
                    Dashboard
                  </NavLink>

                  }

                  {
                    user?.email ? <Button style={{ color: 'navy', margin: '0 0px', textDecoration: 'none' }} onClick={logOutUser}>Log Out</Button>
                      : <NavLink className="logIn-btn" style={{ color: 'navy', padding: '0 0px', textDecoration: 'none' }} to='/logIn'>Log In</NavLink>
                  }

                </Box>
              </Typography>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
      <div>

        <React.Fragment>
          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;