import axios from "axios"
import authHeader from "./AuthStorage"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export async function getAll() {
    const API_URL = `${API_BASE_URL}/grocery/`
    let response = await axios.get(API_URL, { headers: authHeader() })
    return response.data
}

export async function createItem(title) {
    const API_URL = `${API_BASE_URL}/grocery/`
    let response = await axios.post(API_URL, {
        title: title,
        desc: "",
        quantity: 1
    }, {
        headers: authHeader()
    })
    return response.data
}