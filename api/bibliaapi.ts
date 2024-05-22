import axios from "axios";

const bibliaApi = axios.create({
    baseURL:'https://busqueda-fe-api-oa2db432ja-ue.a.run.app/api'
});

export default bibliaApi;