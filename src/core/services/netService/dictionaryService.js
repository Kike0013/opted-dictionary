import axios from '../axios'

const loadDictionary = () => axios.get('/db.json');

export { loadDictionary };