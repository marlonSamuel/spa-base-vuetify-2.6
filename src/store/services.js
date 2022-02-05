import Axios from 'axios'
import PeopleService from '../services/PeopleService'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

const baseUrl = 'http://localhost:44357/api/'

export default {
    peopleService: new PeopleService(Axios,baseUrl)
}