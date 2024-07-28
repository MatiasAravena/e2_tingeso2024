import axios from "axios";

const localhost = "localhost";
const port = "8082";

console.log(localhost)
console.log(port)

const httpClient = axios.create({
    baseURL: `http://${localhost}:${port}`,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default httpClient;