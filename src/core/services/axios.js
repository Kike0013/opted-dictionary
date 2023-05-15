import Axios from "axios";

const AxiosContext = Axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    timeout: 6 * 1000
})

export default AxiosContext;