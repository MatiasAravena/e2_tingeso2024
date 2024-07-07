import axios from 'axios';


const getAll = () => {
    return axios.get(`http://localhost:8010/vehiculos/listar`);
}

const create = data => {
    return axios.post('http://localhost:8010/vehiculos/', data);
}

const get = id => {
    return axios.get(`http://localhost:8010/vehiculos/${id}`);
}

const update = data => {
    return axios.put('http://localhost:8010/vehiculos/', data);
}

const remove = id => {
    return axios.delete(`http://localhost:8010/vehiculos/${id}`);
}
export default { getAll, create, get, update, remove };