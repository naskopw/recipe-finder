import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/auth/`;

class AuthService {
    async login(username, password) {
        const response = await axios
            .post(API_URL + "signin", {
                username,
                password
            });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
        ;
    }

    isLoggedIn() {
        return this.getCurrentUser() !== null
    }
}

export default new AuthService();