import axios from "axios";

const vehiculos = axios.create({
    baseURL: `http://localhost:8010`,
    headers: {
        'Content-Type': 'application/json'
    }
});

const reparaciones = axios.create({
    baseURL: `http://localhost:8011`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {vehiculos, reparaciones};