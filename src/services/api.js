import axios from 'axios';

const api = axios.create({
    baseURL: "https://tialeila-com.umbler.net"
    // baseURL: "http://192.168.3.10:3003" // this is for testing by others devices in the same wifi network
    // baseURL: "http://localhost:3003"

});

export default api;