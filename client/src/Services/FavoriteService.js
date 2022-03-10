import axios from "axios";
import authHeader from "./AuthStorage";
import ConfigService from "./ConfigService"

export class FavoriteService {
    static async getAll() {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/`
        let response = await axios.get(API_URL, { headers: authHeader() })
        return response.data
    }

    static async delete(cookbookId) {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/${cookbookId}`
        let response = await axios.delete(API_URL, { headers: authHeader() })
        return response.data
    }

    static async get(categoryId) {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/${categoryId}`
        let response = await axios.get(API_URL, { headers: authHeader() })
        return response.data
    }

    static async addRecipe(categoryId, recipeId) {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/${categoryId}/recipe/${recipeId}`
        let response = await axios.post(API_URL, {}, { headers: authHeader() })
        return response.data
    }

    static async removeRecipe(categoryId, recipeId) {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/${categoryId}/recipe/${recipeId}`
        let response = await axios.delete(API_URL, { headers: authHeader() })
        return response.data
    }

    static async createCookbook(title) {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/`
        let response = await axios.post(API_URL, {
            title: title,
            image: "/img/null.png"
        }, { headers: authHeader() })
        return response.data
    }

    static async updateCookbook(_id, title, image) {
        const API_URL = `${ConfigService.getBaseURL()}/favorite/${_id}`
        let response = await axios.put(API_URL, {
            title: title,
            image: image
        }, { headers: authHeader() })
        return response.data
    }
}