import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


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