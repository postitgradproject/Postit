import React from 'react';
import Popup from "reactjs-popup";

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { TransitionGroup } from 'react-transition-group';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import Lectures from '../../Lectures/Lectures';
import Postits from '../../Postits/Postits';
import Slides from '../../Slides/Slides';

import { ButtonGroup } from '@material-ui/core';
import ReactDOM from 'react-dom';

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: '#0f0',
    },    
    space: {
        margin: theme.spacing(0.5),
    },
    root: {
        margin: 20,
        width: '90%',
        padding: 20,
        flexGrow: 1,
        backgroundColor: '#ddd',
        borderRadius: 20,
        verticalAlign: "top",
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

const Course = (props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <div>
                    <h1>{props.lectureCode}</h1>
                    <p><strong>Lecturer: </strong>{props.lecturerName}</p>
                </div>
                <div>
                    <Link to="/lectures">
                    <Popup trigger={<div>
                        <Button className={classes.button}>SEE LECTURES</Button>
                        </div>}
                        position="bottom left">{close => (<div>Content here<a className="close" onClick={close}>&times;</a></div>)}
                        <ButtonGroup>
                            <Button variant="outlined" color="primary" aria-label="add" >
                                <strong>ADD</strong>
                            </Button>
                            <Button variant="outlined" color="secondary" aria-label="add" >
                                <strong>CANCEL</strong>
                            </Button>    
                        </ButtonGroup>  
                    </Popup> 
                    </Link>
                </div>
                <Route path="/lectures" component={PageShell(Lectures)}/>
            </BrowserRouter>    
            <BrowserRouter>
            <Button fullWidth="true" size='large'
                   onClick={() => {
                    ReactDOM.render(<Slides />, document.getElementById('root'));
                  }}>VIEW SLIDES</Button>
            </BrowserRouter>    
        </div>
    );
}

export default Course;