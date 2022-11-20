import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://drivops-api.herokuapp.com/",
    timeout: 10000,
    headers: {
        'Content-Type': "application/json"
    }
})

export default baseApi;