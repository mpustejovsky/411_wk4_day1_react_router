import React from 'react'
import ChipArray from './ChipArray'

// import material ui components here //
// Container, Paper, Chip //

import { Container, makeStyles, Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'block',
      justifyContent:"center",
      marginLeft:"30%",
     
    //   flexWrap: 'wrap',
      '& > *': {
        // margin: theme.spacing(1),
        width: theme.spacing(48),
        height: theme.spacing(30),
      },
    },
  }));


const Car = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment><Container fixed>
            <div className={classes.root}>
            <Paper elevation={3}>       
        <ChipArray id={props.match.params.id-1}/>     
    </Paper></div></Container>
        </React.Fragment>
    )
}

export default Car