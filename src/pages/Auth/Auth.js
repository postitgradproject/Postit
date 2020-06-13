import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';

import {
    AppBar,
    Button,
    TextField,
    Toolbar,
    Typography,
} from '@material-ui/core';
    
import { makeStyles } from '@material-ui/core/styles';

import App from '../../App';

const axios = require('axios').default;



















const useStyles = makeStyles(theme => ({
    outline: {
        backgroundColor: "#88f",
        width: '20%',
        // height: 550,
        padding: 20,
        margin: 'auto',
        marginTop: 150,
        borderRadius: 20,
    },
    input: {
        margin: 'auto',
        width: '90%',
    },
    button: {
        paddingTop: 10,
        margin: theme.spacing(0.25),
    },
    app: {
        width: '100%',
        height: '100%'
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

const Auth = (props) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        mail: '',
        accountType: '',
        username: '',
        password: ''
    });
    const [auth, setAuth] = useState(null);
    const [rightButton, setRightButton] = useState("SIGNUP");
    
    
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };  

    const signupButtons = (
        <div>
            <TextField 
                id="outlined-name"
                label="Firstname"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange('firstName')}
            />
            <TextField 
                id="outlined-name"
                label="Lastname"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange('lastName')}
            />
            <TextField 
                id="outlined-name"
                label="Mail"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange('mail')}
            />
            <TextField 
                id="outlined-name"
                label="Account Type"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                onChange={handleChange('accountType')}
            />
        </div>
    );

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <strong>Post-IT</strong>
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.outline}>
                <div className={classes.input}>
                    {auth}
                    <TextField 
                        id="outlined-name"
                        label="Username"
                        margin="normal"
                        variant="outlined"
                        fullWidth="true"
                        onChange={handleChange('username')}
                    />
                    <TextField 
                        id="outlined-name"
                        label="Password"
                        margin="normal"
                        variant="outlined"
                        fullWidth="true"
                        onChange={handleChange('password')}
                    />
                </div>
                <div style={{display: 'flex' ,justifyContent: 'center'}}>
                    <BrowserRouter>
                        <Link to='/home' style={{height: '100%', width: '100%'}}>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                className={classes.button} 
                                onClick={() => {
                                    console.log("This is the username:" + values.username);
                                    console.log(values.password);
                                    console.log("GOR BUNU HOCAM");
                                    axios.get('http://localhost:5000/signin',{
                                        params: {
                                         username:values.username,
                                         
                                         password: values.password                                        }
                                     })
                            
                                    
                                    .then(res => console.log(res.data));
                                    console.log(values) 
                                    setValues({
                                        firstName: '',
                                        lastName: '',
                                        mail: '',
                                        accountType: '',
                                        username: '',
                                        password: ''
                                    });
                                    ReactDOM.render(<App />, document.getElementById('root'));
                                }}
                            >      
                                SUBMIT                 
                            </Button>
                        </Link>
                        <Button 
                            variant="outlined" 
                            color="inherit" 
                            className={classes.button} 
                            onClick={() => {
                                if(rightButton === "SIGNUP") {

                                    setAuth(signupButtons);
                                    setRightButton("LOGIN");
                                }
                                else {
                                    
                                    setAuth(null);
                                    setRightButton("SIGNUP");
                                }
                            }}
                            >
                            <p>{rightButton.buttonName}</p>
                        </Button>
                        <Route exact strict path="/home" component={App} className={classes.app}/>
                    </BrowserRouter>
                    {rightButton}
                </div>
            </div>
        </div>
    );
};

export default Auth;