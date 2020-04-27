//#region Imports

import {
  Duration,
  InputLabel,
  MenuItem,
  Select,
  Theme,
  Tooltip
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FilterEvent from "./FilterEvent";

//#endregion

export default function FilterFortEvent(props) {
  const [checkedItems, setCheckedItems] = useState({});
  //   const filterEventArray = (filterTerm: any) => {
  //     return vehicleData.vehicles.filter((vehicle: IVehicle) => {
  //       let status = vehicle.status;
  //       return status.toLowerCase().indexOf(filterTerm.toLowerCase()) >= 0;
  //     });
  //   };

  //   const handleChange = (
  //     event: React.ChangeEvent<HTMLInputElement>,
  //     statuses: any
  //   ) => {
  //     objList[event.target.name] = event.target.checked;
  //     setObjList({ ...objList, [event.target.name]: event.target.checked });
  //     setCheckedItems({
  //       ...checkedItems,
  //       [event.target.name]: event.target.checked
  //     });

  //     let objListLength = Object.keys(objList).length;
  //     let statusesLength = Object.keys(statuses[0]).length;
  //     let res: any = [];

  //     for (let i = 0; i < statusesLength; i++) {
  //       if (objListLength == 1) {
  //         if (objList[Object.keys(statuses[0])[i]] === false) {
  //           res = filterEventArray(
  //             Object.keys(statuses[0])[statusesLength - i - 1]
  //           );
  //         } else if (objList[Object.keys(statuses[0])[i]] === true) {
  //           res = vehicleData.vehicles;
  //         }
  //       } else {
  //         if (
  //           objList[Object.keys(statuses[0])[i]] === false &&
  //           objList[Object.keys(statuses[0])[statusesLength - i - 1]] === false
  //         ) {
  //           setResources([]);
  //         } else if (
  //           objList[Object.keys(statuses[0])[i]] === true &&
  //           objList[Object.keys(statuses[0])[statusesLength - i - 1]] === false
  //         ) {
  //           res = filterEventArray(Object.keys(statuses[0])[i]);
  //         } else if (
  //           objList[Object.keys(statuses[0])[i]] === true &&
  //           objList[Object.keys(statuses[0])[statusesLength - i - 1]] === true
  //         ) {
  //           res = vehicleData.vehicles;
  //         }
  //       }
  //     }

  //     setResources(
  //       res.map((vehicle: IVehicle) => {
  //         return {
  //           id: vehicle.id,
  //           fleet: vehicle,
  //           title: vehicle.assetTag
  //         };
  //       })
  //     );
  //   };

  //#endregion

  const handlechange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const filterState = props => {
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

  const filterCity = props => {
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

  return (
    <div>
      <div className="checkbox-filter">
        <span className="filter">Filter State</span>
        {filterState(props).map(state => {
          return (
            <FilterEvent
              checked={checkedItems[state]}
              change={handlechange}
              name={state}
            />
          );
        })}
        <span className="filter">Filter City</span>
        {filterCity(props).map(city => {
          return (
            <FilterEvent
              checked={checkedItems[city + "filter"]}
              change={handlechange}
              name={city + "filter"}
              lable={city}
            />
          );
        })}
      </div>
    </div>
  );
}
