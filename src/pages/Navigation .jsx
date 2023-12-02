import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AvatarImage from './Avatar.jpeg';
const Navigation = () => {
  const theme = useTheme(); // Define the theme here

  return (
    <AppBar position="static" sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blogging Platform
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ 
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          marginRight: theme.spacing(2),
          '&:hover': {
            background: 'linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)',
          },
        }}>
          Create Note
        </Button>
        <Button color="inherit" component={Link} to="/notes" sx={{ 
          background: 'linear-gradient(45deg, #66BB6A 30%, #81C784 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(102, 187, 106, .3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #81C784 30%, #66BB6A 90%)',
          },
        }}>
          View Notes
        </Button>
        <Avatar sx={{ marginLeft: 2 }} src={AvatarImage} alt="Avatar" />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
