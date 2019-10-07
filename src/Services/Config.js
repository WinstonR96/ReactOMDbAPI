import axios from "axios";

const BASE_URL = window.config.ENDPOINT;

//Creo la instancia de AXIOS
const API = axios.create({
  baseURL: BASE_URL
});

export default API;
