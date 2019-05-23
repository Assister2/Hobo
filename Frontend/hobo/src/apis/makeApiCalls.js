import axios from 'axios'
export default {
    makeGetRequest(path, callback) {
        axios.get(path)
            .then(callback)
            .catch((error) => { console.log(error) })
    },
    makePostRequest(path, callback) {
        axios.post(path)
            .then(callback)
            .catch((error) => { console.log(error) })
    },
    makePutRequest(path, callback) {
        axios.put(path)
            .then(callback)
            .catch((error) => { console.log(error) })
    },
    makeDeleteRequest(path, callback) {
        axios.delete(path)
            .then(callback)
            .catch((error) => { console.log(error) })
    }
}