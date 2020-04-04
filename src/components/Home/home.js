import React from "react";
import { connect } from "react-redux";
import * as fortActions from "../../redux/actions/fortActions";
import FortList from "../FortList";
import SearchFort from "../SearchFort";
import FilterFortEvent from "../FilterFortEvent";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import FilterEvent from "../FilterEvent";
import Checkbox1 from "./Hello";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibileForts: this.props.forts,
      searchTerm: "",
      checkedItems: new Map()
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    console.log(this.state.checkedItems);
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
    console.log(this.state.checkedItems);
  };

  filterState = props => {
    return props.forts
      .map(fort => {
        return fort.state;
      })
      .filter((state, index, arr) => {
        if (arr.indexOf(state) == index) {
          return state;
        }
      });
  };

  filterCity = props => {
    return props.forts
      .map(fort => {
        return fort.city;
      })
      .filter((city, index, arr) => {
        if (arr.indexOf(city) == index) {
          return city;
        }
      });
  };

  render() {
    return (
      <div>
        <SearchFort label="Search..." OnChange={this.OnChange} />
        <div className="checkbox-filter">
          <span className="filter">Filter State</span>
          {this.filterState(this.props).map(state => {
            return (
              <Checkbox1
                name={state}
                checked={this.state.checkedItems.get(state)}
                onChange={this.handleChange}
              />
            );
          })}
          <span className="filter">Filter City</span>
          {this.filterCity(this.props).map(city => {
            return (
              <Checkbox1
                name={city + "filter"}
                checked={this.state.checkedItems.get(city + "filter")}
                onChange={this.handleChange}
                label={city}
              />
            );
          })}
        </div>
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
