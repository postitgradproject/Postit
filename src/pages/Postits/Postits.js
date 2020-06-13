import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import AutoScale from 'react-auto-scale';

import Avatar from '@material-ui/core/Avatar';
import Popup from "reactjs-popup";
import ReactDOM from 'react-dom';
//import ReactScrollbar from 'react-scrollbar-js';

import Courses from '../Courses/Courses';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import Slides from '../../pages/Slides/Slides';

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
        
    },
    td1: {
        width: 950,
        heigth: 100,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
        align: "center",
    },
    td2: {
        width: 820,
        heigth: 100,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
    },
    div1: {
        width: 820,
        heigth: 100,
        align: "right",
        
    },
    td3: {
        width: 950,
        heigth: 100,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
    },
    td4: {
        width: 950,
        heigth: 130,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
    },
    textarea1: {
        height: 220,
        width: 950,
        placeholder: "Write your own notes here...",
    },
    td5: {
        width: 820,
        height: 230,
        align: "center",
    },
    slide: {
      width: 950,
      height: 800,
      borderColor: '#000',
  },
    buttonEnhance: {
      width: 100,
      heigth: 40,
      backgroundColor: 'lightgray',
      textalign: 'right',
  },
    button1: {
        width: 100,
        heigth: 40,
        backgroundColor: 'lightgray',
    },
    button2: {
        width: 100,
        heigth: 40,
        backgroundColor: 'lightgray',
    },
    button3: {
        width: 100,
        heigth: 40,
        backgroundColor: 'lightgray',
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
    //const { data } = this.props.location
    //"file:///E:/Concept%20of%20Programming%20Language/scope.pdf" src yanına yaz
 
  
    function openFullscreen() 
    {
      var elem = document.getElementById("slide");
      var view = document.getElementById("view");
      
      //var comment = document.getElementById("comments");
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
      }
      //elem.width = 1515;
      //elem.height = 840;
      view.width = 1515;
      view.height = 840;
      //comment.cols = 207;

      document.onkeydown = function (evt) {     //2 ESCAPE KÜÇÜLTÜR
          evt = evt || window.event;
          if (evt.keyCode == 27) {
              //elem.width = 900;
              //elem.height = 850;
              view.width = 950;
              view.height = 800;
              //comment.cols = 123;
          }
      };
  }
      var arr = [];
      var i = 0;
      var yellow = 1, red = 0, blue = 0, green = 0;
      function changeColor()
      {
          document.getElementById("yellow").onclick = function (event) {
            yellow = 1;
            red = 0;
            blue = 0;
            green = 0;
            document.getElementById("yellow").style.background = "#FAFA90";
          };
          document.getElementById("red").onclick = function (event) {
            yellow = 0;
            red = 1;
            blue = 0;
            green = 0;
            document.getElementById("red").style.background = "#FF0000";
          };
          document.getElementById("blue").onclick = function (event) {
            yellow = 0;
            red = 0;
            blue = 1;
            green = 0;
            document.getElementById("blue").style.background = "#0094FF";
         };
         document.getElementById("green").onclick = function (event) {
            yellow = 0;
            red = 0;
            blue = 0;
            green = 1;
            document.getElementById("green").style.background = "#ADCB4A";
          };
      }
      function publishPost()
      {
        var notes = document.getElementById("comments").value;
        
        if(yellow == 1)
        {
          var post = "<textarea className={classes.textarea1} style=\"background-color: #FAFA90;\" rows=\"14\" cols=\"80\">"+notes+"</textarea>";
        }
        else if(red == 1)
        {
          var post = "<textarea className={classes.textarea1} style=\"background-color: #FF9999;\" rows=\"14\" cols=\"80\">"+notes+"</textarea>";
        }
        else if(blue == 1)
        {
          var post = "<textarea className={classes.textarea1} style=\"background-color: #99CCFF;\" rows=\"14\" cols=\"80\">"+notes+"</textarea>";
        }
        else if(green == 1)
        {
          var post = "<textarea className={classes.textarea1} style=\"background-color: #CCFFCC;\" rows=\"14\" cols=\"80\">"+notes+"</textarea>";
        }
        if (notes != "" && notes.length >= 20) {
          arr.push(post);
          document.getElementById("questions").innerHTML += arr[i];
          i++;
        }
        if (notes.length >= 20) {
            document.getElementById("comments").value = "";
        }
        if (notes.length < 20) {
            alert("YOU HAVE TO USE AT LEAST 20 CHARACTERS !");
        }
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
  <table className={classes.table} id="myTable">
        <tr>
            <td id="slide" className={classes.td1}>
            <iframe className={classes.slide} src= "https://onedrive.live.com/embed?cid=B753023CFEF00415&amp;resid=B753023CFEF00415%21267&amp;authkey=AHh92H2j7CR7pps&amp;em=2&amp;wdAr=1.3333333333333333" id="view" frameborder="0"></iframe>
            </td>
            <td class="nodec" className={classes.td2}>
                <div className={classes.div1} id="questions"></div>
            </td>
        </tr>
        <tr>
            <td className={classes.td3}><Button variant = "outlined" className={classes.buttonEnhance} onClick={openFullscreen}>Enhance</Button></td>
        </tr>
        <tr>
            <td className={classes.td4}><textarea id="comments" class="OwnNotes" className={classes.textarea1} placeholder="Write your own notes here..."></textarea></td>
            <td>
                <table>
                    <tr>
                        <td className={classes.td5} align="right">
                            <Button variant = "outlined" style={{backgroundColor: "#FAFA90"}} id="yellow" class="tooltip" onClick={changeColor}>
                            </Button><br />
                            <Button variant = "outlined" style={{backgroundColor: "#FF9999"}} id="red" class="tooltip" onClick={changeColor}>
                            </Button><br />
                            <Button variant = "outlined" style={{backgroundColor: "#99CCFF"}} id="blue" class="tooltip" onClick={changeColor}>
                            </Button><br />
                            <Button variant = "outlined" style={{backgroundColor: "#CCFFCC"}} id="green" class="tooltip" onClick={changeColor}>
                            </Button>
                        </td>
       
                        <td className={classes.td5} align="left">
                            <Button variant = "outlined" className={classes.button1}>Save</Button><br />
                            <Button variant = "outlined" className={classes.button2}>Previous Notes</Button><br />
                            <Button variant = "outlined" className={classes.button3} onClick={publishPost}>Publish</Button>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
         </div>
      )
   }

export default Table




