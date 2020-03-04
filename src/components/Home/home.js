import React from "react";
import { connect } from "react-redux";
import * as fortActions from "../../redux/actions/fortActions";
import FortList from "../FortList";
import SearchFort from "../SearchFort";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visibileForts: this.props.forts,
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(fortActions.loadForts());
  }

  OnChange = query => {
    let tempAddress = this.props.forts.filter(fort => {
      const name = fort.name.toLowerCase();
      const city = fort.city.toLowerCase();
      const state = fort.state.toLowerCase();
      const el = query.toLowerCase();
      if (name.includes(el) > 0) {
        return name.includes(el);
      } else if (state.includes(el) > 0) {
        return state.includes(el);
      } else if (city.includes(el) > 0) {
        return city.includes(el);
      }
    });
    this.setState({
      visibileForts: tempAddress,
      searchTerm: query
    });
  };

  render() {
    return (
      <div>
        <SearchFort label="Search..." OnChange={this.OnChange} />
        {this.state.visibileForts.length > 0 || this.state.searchTerm
          ? this.state.visibileForts.map(fort => {
              return <FortList fort={fort} />;
            })
          : this.props.forts.map(fort => {
              return <FortList fort={fort} />;
            })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forts: state.forts
  };
}

export default connect(mapStateToProps)(Home);
