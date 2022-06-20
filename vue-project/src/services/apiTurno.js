import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getListaTurnos() {
        return apiClient.get('/api/getlistaTurnos')
    },
    setTurno(turno) {
        return apiClient.post('/api/setTurno', turno)
    },
    deleteTurno(id) {
        return apiClient.delete('/api/deleteTurno/' + id)
    }
}
