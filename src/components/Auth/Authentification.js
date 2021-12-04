import axios from "axios";


class Authentification {

    getCurrentUser = () => {
        return localStorage.getItem('token')
    }

    getUserDetails = () => {
        if(this.getCurrentUser) {
           axios.get('https://127.0.0.1:8000/user')
            .then(res => res.data)
            .catch(() => null)
        }
    }
}

export default new Authentification(); 
