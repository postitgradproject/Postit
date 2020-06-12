import React from 'react';
import Calendar from 'react-calendar';

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


const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Calendar />
            
        </div>
    );
};

export default Home;