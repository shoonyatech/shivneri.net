import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const SearchFort = ({ OnChange, text, val, label }) => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">{text}
            <TextField
                label={label}
                id="standard-basic"
                type="search"
                name="search"
                placeholder="search fort"
                autocomplete="off"
                value={val}
                onChange={e => OnChange(e.currentTarget.value)}
            />
        </form>
    );
};

export default SearchFort;