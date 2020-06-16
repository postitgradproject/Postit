import React, { Component, useRef, setState } from 'react';
import { Link, Route, BrowserRouter, Switch, Router } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Popup from "reactjs-popup";
import ReactDOM from 'react-dom';

import Courses from '../Courses/Courses';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import Surveys from '../../pages/Surveys/Surveys';
import Postits7 from '../../pages/Postits/Postits7'
import Postits8 from '../../pages/Postits/Postits8'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import avatar from "../../images/jason-voorhees.png";

import { Redirect } from 'react-router-dom';
import App from '../../App';

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: '#0f0',
    },  
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
    table: {
        
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
        align: "center",
        
    }
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
 
  const Table = (props) => {
    const classes = useStyles();
    const textInput = useRef(null);
    
    function enhance()
    {
        const x = <Link to = {{pathname: "../../pages/Postits/Postits", data: "textInput.current.innerHTML"}}></Link> 
        //alert(textInput.current.innerHTML);
        //ReactDOM.render(<Postits />, document.getElementById('root'));
    }
 
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
                    <Button fullWidth="true" size='large'
                    onClick={() => {
                     ReactDOM.render(<App />, document.getElementById('root'));
                   }}><strong>Main Page</strong></Button>
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
 
             <table align="center" id="table" border="1" border-collapse="collapse" width="90%">
         <tr>
             <td width="20%" align="center" id="slide">
               
                  <iframe src="https://onedrive.live.com/embed?cid=B753023CFEF00415&amp;resid=B753023CFEF00415%211611&amp;authkey=ANbkfIB2YjmYThI&amp;em=2&amp;wdAr=1.3333333333333333"
                     ref={textInput} frameborder="0">
                     Bu <a target="_blank"
                      href="https://office.com/webapps">Office Online</a> tarafından sağlanan eklenmiş bir <a target="_blank" href="https://office.com">Microsoft Office</a> belgesidir.
                  </iframe>
             </td>
             <td align="center" id="col">
                 <Button id="0" onClick={() => ReactDOM.render(<Postits7 />, document.getElementById('root'))}><h2><b>Chapter 3 Transport Layer</b></h2></Button>
             </td>
         </tr>
         <tr>
             <td width="20%" align="center" id="slide">
                 <iframe src="https://onedrive.live.com/embed?cid=B753023CFEF00415&amp;resid=B753023CFEF00415%211612&amp;authkey=AJ27j6z8aistCv4&amp;em=2&amp;wdAr=1.3333333333333333" 
                    ref={textInput} frameborder="0">
                 Bu <a target="_blank" href="https://office.com/webapps">Office</a> tarafından sağlanan eklenmiş bir <a target="_blank" href="https://office.com">Microsoft Office</a> belgesidir.
                 </iframe>
             </td>
             <td align="center" id="col">
                 <Button id="0" onClick={() => ReactDOM.render(<Postits8 />, document.getElementById('root'))}><h2><b>Chapter 4 Network Layer: The Data Plane</b></h2></Button>
             </td>
         </tr>
         </table>
 
          </div>
       );
      } 

export default Table




