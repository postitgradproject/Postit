import React from 'react';
import Popup from 'reactjs-popup';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { TransitionGroup } from 'react-transition-group';

import DragNDrop from '../DragNDrop/DragNDrop';
import Survey from './Survey/Survey';
import TextEditor from '../TextEditor/TextEditor';

import { 
    Button,
    ButtonGroup,
    Fab,
    Tab,
    Tabs,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    space: {
        margin: theme.spacing(0.5),
    },
    addButton: {
        position: "fixed",
        bottom: 50,
        right: 50,
    },
    newSurvey: {
        padding: 15,
        margin: 'auto',
    },
    survey: {
        backgroundColor: '#ddd',
        margin: 'auto',
        marginBottom: 15,
        height: 500,
        borderRadius: 10,
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

const NewSurvey = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.newSurvey}>
            <p>Please drag your survey file below or write your survey from our TextEditor!</p>
            <div className={classes.survey}>
                <BrowserRouter>
                    <Tabs variant='fullWidth'>
                        <Tab label="Drag & Drop" component={Link} to="/surveys/dragndrop" ></Tab>
                        <Tab label="Text Editor" component={Link} to="/surveys/texteditor" ></Tab>
                    </Tabs>
                    <Switch>
                        <Route path="/surveys/dragndrop" component={PageShell(DragNDrop)} />
                        <Route path="/surveys/texteditor" component={PageShell(TextEditor)} />
                    </Switch>
                </BrowserRouter>
                
            </div>
            <ButtonGroup>
                <Button variant="outlined" color="primary" aria-label="add" >
                    <strong>SUBMIT</strong>
                </Button>
                <Button variant="outlined" color="secondary" aria-label="add" >
                    <strong>CANCEL</strong>
                </Button>    
            </ButtonGroup>
        </div>
    );
};

export default function Surveys() {
    const classes = useStyles();
    return (
        <div>
            <Survey title="title" author='author'/>
            <Survey title="title2" author='author2'>Efe Berk</Survey>
            <Survey title="title" author='author'/>
            <Survey title="title2" author='author2'>Efe Berk</Survey>
            <Survey title="title" author='author'/>
            <Survey title="title2" author='author2'>Efe Berk</Survey>
            <Survey title="title" author='author'/>
            <Survey title="title2" author='author2'>Efe Berk</Survey>
            <div className={classes.addButton} >
                <Popup 
                    trigger={
                        <Fab variant="extended" color="primary" aria-label="add">
                            Add Survey
                        </Fab>
                    }
                    modal
                    closeOnDocumentClick
                >
                    <NewSurvey />
                </Popup>
            </div>
        </div>
    );
}