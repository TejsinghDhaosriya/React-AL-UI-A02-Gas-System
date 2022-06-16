import axios from "axios";

export const getGasDataList = () =>
  axios.get(`https://tejsingh-gas-server-al-ui-a2.herokuapp.com/data`);
