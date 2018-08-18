import * as types from '../actions/types';

const initialState = {
    planetData: [],
    vehicleData: [],
    tokenData: [],
    findData: [],
    timeData: ''
  };

  const dataReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case types.GET_PLANET_DATA:
        newState = { ...state, planetData: action.planetData };
        break;
      case types.GET_VEHICLE_DATA:
        newState = { ...state, vehicleData: action.vehicleData };
        break;
      case types.GET_TOKEN:
        newState = { ...state, tokenData: action.tokenData };
        break;
      case types.GET_FALCONE:
        newState = { ...state, findData: action.findData };
        break;
      case types.TIME_DATA:
        newState = { ...state, timeData: action.timeData };
        break;
      default:
        newState = state;
    }
    return newState;
  };
  
  export default dataReducer;
