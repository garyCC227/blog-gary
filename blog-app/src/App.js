import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import "./App.css";

import Head from "./components/head";
import Home from "./pages/home";
import Post from "./pages/post";
import NotFound from "./pages/notFound";
// import Navbar from "./components/navbar/navbar";
import Header from "./components/Header";
import About from "./pages/about";
import Work from "./pages/works";
// "homepage": "http://garyCC227.github.io/blog-gary",

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:'100%',
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    width:'1100px',
    margin:'30px auto',
    padding:'10px',
    backgroundColor:'#fafafa',
    borderRadius:"50px",
    alignItems:'center'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    minHeight: 1000,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.innerBox}>
        <Router>
          <CssBaseline />
          <Header name="Linchen Chen" />
          <main className={classes.content}>
            <Head />
            <Switch>
              <Route exact path='/blog-gary' component={Home} />
              <Route path='/post/:id' render={(props) => <Post {...props} />} />
              <Route path='/about' component={About} />
              <Route path='/works' component={Work} /> 
              <Route path='*' component={NotFound} />
            </Switch>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
