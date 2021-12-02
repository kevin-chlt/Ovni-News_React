

class Authentification {

    getCurrentUser = () => {
        return localStorage.getItem('token')
    }
}

export default new Authentification(); 
