import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import cars from '../cars.json'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    name:{justifyContent:"center",
display:"block",
textAlign:"center",},
  }));

  export default function ChipArray (props){

    const classes = useStyles();
    const [chipData] = React.useState([
      { key: "id", label: cars[props.id].id},
      { key: "Name", label: cars[props.id].Name },
      { key: "Miles_per_Gallon", label: cars[props.id].Miles_per_Gallon },
      { key: "Cylinders", label: cars[props.id].Cylinders },
      { key: "Displacement", label: cars[props.id].Displacement },
      { key: "Horsepower", label: cars[props.id].Horsepower },
      { key: "Weight_in_lbs", label: cars[props.id].Weight_in_lbs },
      { key: "Acceleration", label: cars[props.id].Acceleration },
      { key: "Year", label: cars[props.id].Year},
      { key: "Origin", label: cars[props.id].Origin},
    ]);

    return(<div>
        <h1 className={classes.name}>{cars[props.id].Name}<br></br></h1>
        <div className={classes.root}>
            

          {chipData.map((data) => {  
              

         return (     
        <li key={data.key}>
        <Chip size="small" label={`${data.key} : ${data.label}`}/>
        </li>)})}
        </div></div>
    )
  }