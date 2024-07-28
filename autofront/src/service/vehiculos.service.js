import httpClient from "../http-common";


const getAll = () => {
    return httpClient.get(`/vehiculo/listar`);
}

const create = data => {
    return httpClient.post('/vehiculo', data);
}

const get = id => {
    return httpClient.get(`/vehiculo/${id}`);
}

const update = (id, data) => {
    return httpClient.put(`/vehiculo/${id}`, data);
}

const remove = id => {
    return httpClient.delete(`vehiculo/${id}`);
}

export default { getAll, create, get, update, remove };