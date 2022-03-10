import axios from "axios"
import ConfigService from "./ConfigService"

const API_BASE_URL = ConfigService.getBaseURL()

export async function getTrending() {
    const API_URL = `${API_BASE_URL}/recipes/trending`
    let response = await axios.get(API_URL)
    return response.data
}
export async function getRecipe(id) {
    const API_URL = `${API_BASE_URL}/recipes/${id}`
    let response = await axios.get(API_URL)
    return response.data
}