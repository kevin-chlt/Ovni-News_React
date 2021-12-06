import axios from "axios";



class Authentification  {

    getCurrentUser = () => {
        return localStorage.getItem('token')
    }

    getUserDetails = () => {
        if(this.getCurrentUser) {
           axios.get('https://127.0.0.1:8000/user')
            .then(res => localStorage.setItem('id', res.data.id))
            .catch(error => {
                if(error) {
                    localStorage.removeItem('token'); 
                    localStorage.removeItem('id'); 
                }
            })
        } 
    }
}

export default new Authentification(); 
