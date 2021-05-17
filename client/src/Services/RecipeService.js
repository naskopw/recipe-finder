import axios from "axios"

export async function getTrending() {
    const API_URL = "http://localhost:3000/api"
    let response = await axios.get(API_URL)
    return response.data
}
export async function getRecipe(id) {
    const API_URL = `http://localhost:3000/api/details?id=${id}`
    let response = await axios.get(API_URL)
    return response.data
}