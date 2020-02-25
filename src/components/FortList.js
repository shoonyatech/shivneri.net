import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid({ fort }) {
    const classes = useStyles();
    const { image_url, name, state, city, country, constructedYear } = fort
    return (
        <div className={classes.root}>
            <Link to={"/fort/" + fort._id} >
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={image_url} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {city}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {state}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary">
                                        {country}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {constructedYear}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Link>
        </div>
    );
}
