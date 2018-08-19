import { GET_PLANET_DATA, GET_VEHICLE_DATA, GET_TOKEN, GET_FALCONE, TIME_DATA } from './types';
import axios from 'axios';
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

export const getPlanetData = () => dispatch => {
    return axios.get('https://findfalcone.herokuapp.com/planets').then(response => {
      dispatch({ type: GET_PLANET_DATA, planetData: response.data });
    });
  };
  
  export const getVehicleData = () => dispatch => {
    return axios.get('https://findfalcone.herokuapp.com/vehicles').then(response => {
      dispatch({ type: GET_VEHICLE_DATA, vehicleData: response.data });
    });
  };

  export const totalTimeTaken = values => dispatch => {
    dispatch({ type: TIME_DATA, timeData: values });
  };

  export const getToken = values => dispatch => {
    return axios.post('https://findfalcone.herokuapp.com/token', values, config).then(response => {
        dispatch({ type: GET_TOKEN, tokenData: response.data });
    }).catch( (error) => {
      console.log('ERROR======>', error);
    });
  };

  export const findFalcone = values => dispatch => {
    return axios.post('https://findfalcone.herokuapp.com/find', values, config).then(response => {
        dispatch({ type: GET_FALCONE, findData: response.data });
    }).catch( (error) => {
      console.log('ERROR IN GETTING FALCONE======>', error);
    });
  };