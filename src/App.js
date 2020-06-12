import React from "react";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';
import Avatar from '@material-ui/core/Avatar';
import Popup from "reactjs-popup";
import ReactDOM from 'react-dom';

// PROJECT IMPORTS
import './App.css';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Surveys from './pages/Surveys/Surveys';

// MATERIAL UI IMPORTS
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import avatar from "./images/jason-voorhees.png";


// SomeThemes


const useStyles = makeStyles(theme => ({
  space: {
    margin: theme.spacing(0.5),
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: 26,
    height: 26,
    backgroundColor: "#000",
    borderWidth: 13,
  },
}));

const PageShell = (Page, previous) => {
  return props => (
    <div className="page">
    <TransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionName={props.match.path === "/home" ? "SlideIn" : "SlideOut"}
      >
        {console.log(props)}
        <Page {...props} />
    </TransitionGroup>
    </div>
  );
};

function App() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  var login = true;

  const secondButton = (
    login ? 
    <Button variant="contained" color="secondary" ><strong>LOG OUT</strong></Button> :
    <Button variant="contained" color="secondary" ><strong>LOG IN</strong></Button> );

  return (
    <div>
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Grid
                justify="space-between"
                container 
                spacing={24}
              >
                <Grid item>
                  <Typography variant="h6" className={classes.title}>
                    <strong>Post-IT</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <div>
                    <Popup trigger={<div>
                      <Button variant="outlined" color="inherit" className={classes.space}><strong>Options</strong></Button>
                      </div>} position="bottom right">{close => (<div>Content here<a className="close" onClick={close}>&times;</a></div>)}
                      <Button 
                        fullWidth="true" 
                        size='large'
                        onClick={() => {
                          ReactDOM.render(<Profile />, document.getElementById('root'));
                        }}
                      >
                        <Avatar src={avatar} className={classes.avatar} />
                        <strong>Profile</strong>
                      </Button>
                      <Popup trigger={<div>
                        <Button fullWidth="true" size='large' className={classes.space}><strong>Settings</strong></Button>
                        </div>}
                        position="left top">{close => (<div>Content here<a className="close" onClick={close}>&times;</a></div>)}
                        <Button fullWidth="true" size='large'><strong>Set1</strong></Button>
                        <Button fullWidth="true" size='large'><strong>Set2</strong></Button>
                        <Button fullWidth="true" size='large'><strong>Set3</strong></Button>
                        <Button fullWidth="true" size='large'><strong>Set4</strong></Button>
                      </Popup> 
                      <Button 
                      fullWidth="true" 
                      size='large' 
                      variant='contained' 
                      color='secondary' 
                      ><strong>Log Out</strong></Button>
                    </Popup>
                  </div>    
                </Grid>
              </Grid>
            </Toolbar>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
              <Tab label="Home" component={Link} to="/home" ></Tab>
              <Tab label="Courses" component={Link} to="/courses"></Tab>
              <Tab label="Surveys" component={Link} to="/surveys"></Tab>
            </Tabs>
          </AppBar>
          <Switch>
            <Route path="/home" component={PageShell(Home)} />
            <Route path="/courses" component={PageShell(Courses)} />
            <Route path="/surveys" component={PageShell(Surveys)} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
