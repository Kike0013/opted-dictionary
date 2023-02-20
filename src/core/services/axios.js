import Axios from "axios";

const AxiosContext = Axios.create({
    baseURL: '/src/core/data/',
    timeout: 2000
})

export default AxiosContext;