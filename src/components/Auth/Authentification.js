import axios from "axios";


class Authentification {

    getCurrentUser = () => {
        return localStorage.getItem('token')
    }

    getUserDetails = () => {
        if(this.getCurrentUser) {
            axios.post('https://127.0.0.1:8000/user')
            .then(res => {
                return res.data
            })
            .catch(() => false)
        }
    }

}

export default new Authentification(); 
