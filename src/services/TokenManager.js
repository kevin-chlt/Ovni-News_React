import axios from "axios";

export const getCurrentUser = () => {
    return localStorage.getItem('token')
}

export const getUserDetails = async () => {
    if(getCurrentUser()) {
        
        await axios.get('https://127.0.0.1:8000/user')
        .then(res => {
         return res.status >= 200 && res.status < 300 ?  true : false;
        }) 
        .catch(error => {
            if(error) {
                localStorage.clear()
                return false;
            }
        })
    }
}



