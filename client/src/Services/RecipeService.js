import axios from "axios"

export async function getTrending() {
    const API_URL = "http://localhost:3000/api/recipes/trending"
    let response = await axios.get(API_URL)
    return response.data
}
export async function getRecipe(id) {
    const API_URL = `http://localhost:3000/api/recipes/${id}`
    let response = await axios.get(API_URL)
    return response.data
}

export async function getCategory(id) {
    const API_URL = `http://localhost:3000/api/categories/${id}`
    let response = await axios.get(API_URL)
    return response.data
}
export async function getCategoryByStart(start) {
    const API_URL = `http://localhost:3000/api/categories/?startsWith=${start}`
    let response = await axios.get(API_URL)
    return response.data
}

export async function getAllCategories() {
    const API_URL = `http://localhost:3000/api/categories`
    let response = await axios.get(API_URL)
    return response.data
}