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
        firstname: '',
        lastname: '',
        mail: '',
        accountType: '',
        username: '',
        password: ''
    });
    const [auth, setAuth] = useState(null);
    const [rightButton, setRightButton] = useState("SIGNUP");
    
    
    const handleChangeFirstName = firstname => event => {
        setValues({...values, [firstname]: event.target.value});
    };  

    const handleChangeLastName = lastname => event => {
        setValues({...values, [lastname]: event.target.value});
    };  

    const handleChangeMail = mail => event => {
        setValues({...values, [mail]: event.target.value});
    };  

    const handleChangeAccountType = accountType => event => {
        setValues({...values, [accountType]: event.target.value});
    };  

    const handleChangeUsername = username => event => {
        setValues({...values, [username]: event.target.value});
    };  
    
    const handleChangePassword = password => event => {
        setValues({...values, [password]: event.target.value});
    };  

    const signupButtons = (
        <div>
            <TextField 
                id="outlined-firstName"
                label="Firstname"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                //onChange={handleChangeFirstName('firstName')}
                onChange={(event,newValue) => this.setState({Firstname:newValue})}

            />
            <TextField 
                id="outlined-LastName"
                label="Lastname"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                //onChange={handleChangeLastName('lastName')}
                onChange={(event,newValue) => this.setState({lastName:newValue})}

            />
            <TextField 
                id="outlined-mail"
                label="Mail"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                //onChange={handleChangeMail('mail')}
                onChange={(event,newValue) => this.setState({mail:newValue})}

            />
            <TextField 
                id="outlined-accountType"
                label="Account Type"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                //onChange={handleChangeAccountType('accountType')}
                onChange={(event,newValue) => this.setState({accountType:newValue})}

            />
            {/* <TextField 
                id="outlined-name"
                label="Username"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                onChange={handleChangeUsername('username')}
            />
            <TextField 
                id="outlined-name"
                label="Password"
                margin="normal"
                variant="outlined"
                fullWidth="true"
                onChange={handleChangePassword('password')}
            /> */}
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
                        id="outlined-username"
                        label="Username"
                        margin="normal"
                        variant="outlined"
                        fullWidth="true"
                        //onChange={handleChangeUsername('username')}
                        //onChange={(event,newValue) => this.setState({username:newValue})}
                    />
                    <TextField 
                        id="outlined-password"
                        label="Password"
                        margin="normal"
                        variant="outlined"
                        fullWidth="true"
                        //onChange={handleChangePassword('password')}
                        //onChange={(event,newValue) => this.setState({password:newValue})}
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
                                    if(rightButton === "SIGNUP")
                                    {

                                    console.log("This is the username from frontend:" + values.username); 
                                    axios.get('http://localhost:3000/signin',{
                                        params: {
                                         username:values.username,
                                         password: values.password                                        }
                                    })

                                    .then(res => console.log(res.data));
                                    console.log(values) 
                                    setValues({
                                        firstname: '',
                                        lastname: '',
                                        mail: '',
                                        accountType: '',
                                        username: '',
                                        password: ''
                                    });
                                    }
                                    else {
                                        console.log("POST DEBUG");
                                        console.log("This is the firstName:" + values.firstname); 
                                        axios.post("http://localhost:3000/user",{ 
                                            
                                            params: {
                                                firstname: values.firstname,
                                                lastname: values.lastname,
                                                mail: values.mail,
                                                accountType: values.accountType,
                                                username: values.username,
                                                password: values.password
                                            }})
                                    .then(res => console.log(res.data));
                                    console.log(values) 
                                   
                                    }
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