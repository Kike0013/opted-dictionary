import Axios from "axios";

const AxiosContext = Axios.create({
    baseURL: '/data',
    timeout: 2000
})

export default AxiosContext;