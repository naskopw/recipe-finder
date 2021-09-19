import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

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