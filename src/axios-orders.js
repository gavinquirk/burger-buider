import axios from 'axios'

const DB_URL = process.env.REACT_APP_DB_URL

const instance = axios.create({
  baseURL: DB_URL
})

export default instance