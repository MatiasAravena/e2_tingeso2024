import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/listaReparaciones/cotizar');
}

export default { getAll };