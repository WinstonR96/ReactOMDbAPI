import API from "./Config";

//capa de servicio
/**
 * @class Capa de servicio
 */
const MovieService = {
  //funcion para hacer la peticion a la api
  /**
   * @description Realiza la peticion a la API
   * @params {string} params Nombre de la pelicula
   * @returns {Promise} Promesa de la peticion realizada
   */
  get: params =>
    new Promise((resolve, reject) => {
      API.get(params)
        .then(response => response.data)
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
};

export default MovieService;
