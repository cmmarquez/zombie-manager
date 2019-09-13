import axios from 'axios';

export default {
    getAll: async () => {
        let res = await axios.get('/api/zombie');
        return res.data || [];
    },
    findByIdAndUpdate: async (id, body) => {
        let res = await axios.put(`/api/zombie/${id}`, body);
        return res.data || [];
    }
}