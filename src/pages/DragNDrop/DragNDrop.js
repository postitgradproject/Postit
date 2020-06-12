import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import BgImage from './eva-blue-unsplash.jpg';

const useStyles = makeStyles(theme => ({
    outer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 440,
    },
    dropArea: {
        backgroundColor: '#efefef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '90%',
        borderColor: '#aaa',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 2,
        position: 'relative', 
    },
    status: {
        display: 'block',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '80%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    imagePreview: {
        display: 'block',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        position: 'absolute',
        overflow: 'hidden',
    },
    imagePreviewDiv: {
        backgroundColor: '#0ff', 
    }
}));

const DragNDrop = () => {
    const classes = useStyles();

    return (
        <div className={classes.outer}>
            {/* <div className={classes.imagePreview}>
                <div style={classes.imagePreviewDiv} />
            </div> */}
            <div className={classes.dropArea}>
                <div className={classes.status}>Drop Here</div>
            </div>
        </div>
    );
};

export default DragNDrop;