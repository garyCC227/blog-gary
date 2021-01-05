import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import "./App.css";

import Head from "./components/head";
import Home from "./pages/home";
import Post from "./pages/post";
import NotFound from "./pages/notFound";
import Navbar from "./components/navbar/navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
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
    minWidth: 400,
    flexGrow: 1,
    backgroundColor:'#fafafa',
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <Head />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/404' component={NotFound} />
            <Route path='/post/:id' render={(props) => <Post {...props} />} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
