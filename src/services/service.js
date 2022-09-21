import axios from 'axios'
export default {
    getStates() {
        return axios
        .get(process.env.VUE_APP_STATE_NAMES_API)
        .then(response => response.data)
        .catch((error) => {
            return error;
        });
    },
}