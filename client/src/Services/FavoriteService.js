import axios from "axios";
import authHeader from "./AuthStorage";

export class FavoriteService {
    static async getAll() {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/`
        let response = await axios.get(API_URL, {headers: authHeader()})
        return response.data
    }

    static async get(categoryId) {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/${categoryId}`
        let response = await axios.get(API_URL, {headers: authHeader()})
        return response.data
    }

    static async addRecipe(categoryId, recipeId) {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/${categoryId}/recipe/${recipeId}`
        let response = await axios.post(API_URL, {}, {headers: authHeader()})
        return response.data
    }

    static async removeRecipe(categoryId, recipeId) {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/${categoryId}/recipe/${recipeId}`
        let response = await axios.delete(API_URL, {headers: authHeader()})
        return response.data
    }

    static async createCookbook(title) {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/`
        let response = await axios.post(API_URL, {
            title: title,
            image: "/img/null.png"
        }, {headers: authHeader()})
        return response.data
    }

    static async updateCookbook(_id, title, image) {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/${_id}`
        let response = await axios.put(API_URL, {
            title: title,
            image: image
        }, {headers: authHeader()})
        return response.data
    }
}