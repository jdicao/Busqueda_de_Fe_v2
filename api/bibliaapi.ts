import axios from "axios";

const bibliaApi = axios.create({
    baseURL:'https://busqueda-back.onrender.com/api'
});

export default bibliaApi;