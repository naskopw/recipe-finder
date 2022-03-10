import axios from "axios"
import ConfigService from "./ConfigService"

const API_BASE_URL = ConfigService.getBaseURL()


export async function getCategory(id) {
    const API_URL = `${API_BASE_URL}/categories/${id}`
    let response = await axios.get(API_URL)
    return response.data
}
export async function getCategoryByStart(start) {
    const API_URL = `${API_BASE_URL}/categories/?startsWith=${start}`
    let response = await axios.get(API_URL)
    return response.data
}

export async function getAllCategories() {
    const API_URL = `${API_BASE_URL}/categories`
    let response = await axios.get(API_URL)
    return response.data
}