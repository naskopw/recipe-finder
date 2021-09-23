import axios from "axios";
import authHeader from "./AuthStorage";

export class FavoriteService {
    static async getAll() {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/favorite/`
        let response = await axios.get(API_URL, {headers: authHeader()})
        return response.data
    }
}