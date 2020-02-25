import React from "react";
import { connect } from "react-redux";
import * as fortActions from "../../redux/actions/fortActions";
import FortList from "../FortList"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";


class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(fortActions.loadForts())
    }

    render() {
        return (
            <div>
                {
                    this.props.forts.map((fort) => {
                        return <FortList fort={fort} />
                    })

                }

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        forts: state.forts
    };
}

export default connect(
    mapStateToProps
)(Home);
