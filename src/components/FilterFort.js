import React from "react";
import InputCheckBox from "./InputCheckBox";

class FortFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: ""
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  getSortAttibutes() {
    let Rangeyears = [];
    let years = [];
    let states = [];
    let state = [];
    let cities = [];
    let city = [];
    if (this.props.filterFort.length) {
      years = this.props.filterFort.map(fort => fort.year).sort();
      state = this.props.filterFort.map(fort => fort.state).sort();
      states = state.filter((item, pos) => state.indexOf(item) == pos);
      city = this.props.filterFort.map(fort => fort.city).sort();
      cities = city.filter((item, pos) => city.indexOf(item) == pos);
    }

    return {
      states,
      cities
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () =>
    this.getSortAttibutes().states.map(this.createCheckbox);

  toggleCheckboxChange(event) {
    console.log(event.target.value);
    this.setState({
      isChecked: "isSelected"
    });
  }

  render() {
    if (this.props.filterFort != undefined) {
      return (
        <div className="sortFortList">
          <form>
            {this.createCheckboxes()}
            <h4>state</h4>
            {this.getSortAttibutes().states.map((state, index) => {
              return (
                <InputCheckBox
                  name={state}
                  value={state}
                  lable={index}
                  key={index}
                  checked={this.state.isChecked}
                  onChange={this.toggleCheckboxChange}
                />
              );
            })}
            <h4>city</h4>
            {this.getSortAttibutes().cities.map((state, index) => (
              <InputCheckBox
                name={state}
                value={state}
                lable={index}
                key={index}
                checked={this.state.isChecked}
                onChange={this.toggleCheckboxChange}
              />
            ))}
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default FortFilter;
