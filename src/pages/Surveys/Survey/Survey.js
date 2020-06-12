import React from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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


const Survey = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <h2>{props.title}</h2>
            <p><strong>Author:</strong> {props.author}</p>
            <p>{props.children}</p>
            <Button variant="outlined" >START SURVEY</Button>
        </div>
    );
}

export default Survey;