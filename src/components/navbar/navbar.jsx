import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assist/img/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content:{
    minWidth:1000,
    margin:'auto',
    height:100,
    backgroundColor:'white',
  },
  avatar:{
    borderRadius:'50%',
    height:'60px',
    width:'60px',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.content}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className={classes.avatar} src={logo} alt="avatart" />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            <strong>(Gary) Linchen</strong> Chen
          </Typography>
          <Button color="inherit">
          <Typography variant="h6" className={classes.title}>
            <strong>HOME</strong>
          </Typography>
          </Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
