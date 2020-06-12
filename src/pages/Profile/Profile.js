import React from 'react';
import Popup from "reactjs-popup";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom'

import { 
    AppBar,
    Toolbar,
    Typography 
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    space: {
      margin: theme.spacing(0.5),
    },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function Profile() {
    const classes = useStyles();
    return (
        <div>
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
                <Popup trigger={<div>
                        <Button variant="outlined" color="inherit" className={classes.space}><strong>Options</strong></Button>
                        </div>}
                   position="bottom right">{close => (<div>Content here<a className="close" onClick={close}>&times;</a></div>)}
                   <Button fullWidth="true" size='large'><strong>Main Page</strong></Button>
                   <Popup trigger={<div>
                        <Button fullWidth="true" size='large' className={classes.space}><strong>Settings</strong></Button>
                        </div>}
                        position="left top">{close => (<div>Content here<a className="close" onClick={close}>&times;</a></div>)}
                        <Button fullWidth="true" size='large'><strong>Set1</strong></Button>
                        <Button fullWidth="true" size='large'><strong>Set2</strong></Button>
                        <Button fullWidth="true" size='large'><strong>Set3</strong></Button>
                        <Button fullWidth="true" size='large'><strong>Set4</strong></Button>
                  </Popup> 
                   <Button fullWidth="true" size='large' variant='contained' color='secondary'><strong>Log Out</strong></Button>
                </Popup>   
                </Grid>
              </Grid>
            </Toolbar>
            </AppBar>

        </div>
    );
}
