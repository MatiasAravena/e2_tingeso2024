import axios from 'axios';
import httpClient from "../http-common";

const url = 'http://localhost:8010/vehiculos';

const getAll = () => {
    return httpClient.get(`${url}/listar`);
}

const create = data => {
    return axios.post(url, data);
}

const get = id => {
    return axios.get(`${url}/${id}`);
}

const update = data => {
    return axios.put(url, data);
}

const remove = id => {
    return axios.delete(`${url}/${id}`);
}
export default { getAll, create, get, update, remove };