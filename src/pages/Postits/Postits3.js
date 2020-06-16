import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import AutoScale from 'react-auto-scale';
import './Postit/Style.css';

import Avatar from '@material-ui/core/Avatar';
import Popup from "reactjs-popup";
import ReactDOM from 'react-dom';

import Slides from '../../pages/Slides/Slides';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import avatar from "../../images/jason-voorhees.png";

import { Redirect } from 'react-router-dom';
import App from '../../App';

const axios = require('axios').default;
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
        width: 1075,
        heigth: 100,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
        align: "center",
    },
    td2: {
        width: 445,
        heigth: 100,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
    },
    div1: {
        align: "right",
    },
    td3: {
        width: 825,
        heigth: 100,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
    },
    td4: {
        width: 825,
        heigth: 130,
        borderTopWidth: 1, 
        borderColor: 'black',
        borderStyle: 'solid',
    },
    textarea1: {
        height: 220,
        width: 1075,
        placeholder: "Write your own notes here...",
    },
    textarea2: {
      height: 220,
      width: 445,
      placeholder: "Write your own notes here...",
  },
  textarea3: {
    height: 40,
    width: 650,
    placeholder: "Write your own notes here...",
  },
    td5: {
        width: 695,
        height: 230,
        align: "center",
    },
    slide: {
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
    },
    buttonEdit: {
      width: 40,
      heigth: 100,
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

      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
      }

      view.width = 1800;
      view.height = 1000;

      document.onkeydown = function (evt) {     //2 ESCAPE KÜÇÜLTÜR
          evt = evt || window.event;
          if (evt.keyCode == 27) {
              view.width = 1075;
              view.height = 800;
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

      function update()
      {
        document.getElementById("Button").disabled = true;
        var areas = document.getElementsByClassName("txt"),
        tab = [], liIndex;  
        var i = 0;   
        for(var x = 0; x < areas.length; x++)
        {
          tab.push(areas[x].innerHTML);
        }
        for(i = 0; i < areas.length; i++)
        {
          areas[i].onclick = function()
          {
            document.getElementById("Button").disabled = false;
            liIndex = tab.indexOf(this.innerHTML);
            document.getElementById("Button").onclick = function()
            {
              areas[liIndex].innerHTML = document.getElementById("edit").value+"<span class=\"close\">X</span>";
              deleteIt();
              update();
              document.getElementById("Button").disabled = true;
            }
          }
        }
      }
      function deleteIt()
      {
        var closebtns = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < closebtns.length; i++) {
          closebtns[i].addEventListener("click", function() {
            var str1;
            var index = this.parentElement.innerHTML.indexOf('<');
            str1 = this.parentElement.innerHTML.substr(0, index);
            axios.post('http://localhost:3001/postit_remove', {
              question: str1
            })
          this.parentElement.style.display = 'none';
          });
        }
      }
      function publishPost()
      {
        var notes = document.getElementById("comments").value;
        
        if(yellow == 1)
        {
          var post = "<div class=\"txt\" className={classes.textarea2} style=\"background-color: #FAFA90;\" rows=\"14\" cols=\"75\">"+
          notes+
          "<span class=\"close\">X</span></div>";
        }
        else if(red == 1)
        {
          var post = "<div class=\"txt\" className={classes.textarea2} style=\"background-color: #FF9999;\" rows=\"14\" cols=\"75\">"+
          notes+
          "<span class=\"close\">X</span></div>";
        }
        else if(blue == 1)
        {
          var post = "<div class=\"txt\" className={classes.textarea2} style=\"background-color: #99CCFF;\" rows=\"14\" cols=\"75\">"+
          notes+
          "<span class=\"close\">X</span></div>";
        }
        else if(green == 1)
        {
          var post = "<div class=\"txt\" className={classes.textarea2} style=\"background-color: #CCFFCC;\" rows=\"14\" cols=\"75\">"+
          notes+
          "<span class=\"close\">X</span></div>";
        }
        if (notes != "" && notes.length >= 20) {
          arr.push(post);
          document.getElementById("questions").innerHTML += arr[i];
          i++;
          axios.post('http://localhost:3001/postits', {
            //owner: "",
            question: notes,
            //replies: "",
            //value:
        })
        }
        if (notes.length >= 20) {
            document.getElementById("comments").value = "";
        }
        if (notes.length < 20) {
            alert("YOU HAVE TO USE AT LEAST 20 CHARACTERS !");
        }
        update()
        deleteIt()
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
            <iframe className={classes.slide}  width="1075" height="800" src= "https://onedrive.live.com/embed?cid=B753023CFEF00415&amp;resid=B753023CFEF00415%211607&amp;authkey=AH9A3dFghRWNDok&amp;em=2&amp;wdAr=1.3333333333333333" id="view" frameborder="0"></iframe>
            </td>
            <td class="nodec" className={classes.td2}>
                <div className={classes.div1} id="questions"></div>
            </td>
        </tr>
        <tr>
            <td className={classes.td3}><Button variant = "outlined" className={classes.buttonEnhance} onClick={openFullscreen}>Hide</Button></td>
            <td className={classes.td3}><textarea id="edit" className={classes.textarea3}></textarea><button id="Button" className={classes.buttonEdit} disabled>Edit</button></td>
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
                            <Button variant = "outlined" className={classes.button2} onClick={update}>Previous Notes</Button><br />
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




