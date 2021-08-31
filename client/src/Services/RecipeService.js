import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function getTrending() {
    const API_URL = `${API_BASE_URL}/api/recipes/trending`
    let response = await axios.get(API_URL)
    return response.data
}
export async function getRecipe(id) {
    const API_URL = `${API_BASE_URL}/api/recipes/${id}`
    let response = await axios.get(API_URL)
    return response.data
}

export async function getCategory(id) {
    const API_URL = `${API_BASE_URL}/api/categories/${id}`
    let response = await axios.get(API_URL)
    return response.data
}
export async function getCategoryByStart(start) {
    const API_URL = `${API_BASE_URL}/api/categories/?startsWith=${start}`
    let response = await axios.get(API_URL)
    return response.data
}

export async function getAllCategories() {
    const API_URL = `${API_BASE_URL}/api/categories`
    let response = await axios.get(API_URL)
    return response.data
}