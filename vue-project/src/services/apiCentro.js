import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getListaCentros() {
        return apiClient.get('/api/getlistaCentros')
    },
    setCentro(centro) {
        return apiClient.post('/api/setCentro', centro)
    },
    deleteCentro(id) {
        return apiClient.delete('/api/deleteCentro/' + id)
    }
}
