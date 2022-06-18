import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getListaVacunas() {
        return apiClient.get('/api/getlistavacunas')
    },
    setVacuna(Vacuna) {
        return apiClient.post('/api/setVacuna', Vacuna)
    },
    deleteVacuna(id) {
        return apiClient.delete('/api/deletevacuna/' + id)
    },
}
