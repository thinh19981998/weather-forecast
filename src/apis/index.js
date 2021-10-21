import axios from 'axios';

export const getDataByCoords = (latitude, longitude) =>
  axios.get(
    `https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`
  );

export const getDataByWoeid = (woeid) =>
  axios.get(
    `https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
  );

export const getDataByCity = (city) =>
  axios.get(
    `https://the-ultimate-api-challenge.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`
  );
