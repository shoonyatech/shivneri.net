import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as fortActions from '../redux/actions/fortActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { render } from 'react-testing-library';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class FortDetailPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fort: Object.assign({}, this.props.fort)
        }
    }


    render() {
        const { _id, image_url, name, state, city, country, detail, constructedYear, externalLink } = this.state.fort
        return (
            <Card className="root">
                <CardHeader
                    title={name}
                    subheader={state}
                />
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image="/tools/download.jpeg"
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" color="textSecondary" component="h5">
                            {city}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5">
                            {country}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5">
                            {constructedYear}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {detail}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}



function getFortById(forts, id) {
    const fort = forts.filter(fort => fort._id == id);
    if (fort.length) {

        return fort[0];
    }  //since filter returns an array, have to grab the first.
    return null;
}

function mapStateToProps(state, ownProps) {
    let fortId = ownProps.match.params.id;
    let fort = { _id: '', image_url: '', name: '', state: '', city: '', country: '', detail: '', constructedYear: '', externalLink: '' };
    if (fortId && state.forts.length > 0) {
        fort = getFortById(state.forts, fortId);
    }
    return {
        fort: fort
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(fortActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FortDetailPage);