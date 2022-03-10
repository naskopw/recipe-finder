import axios from "axios"
import authHeader from "./AuthStorage"
import ConfigService from "./ConfigService"

const API_BASE_URL = ConfigService.getBaseURL()

export async function getAll() {
    const API_URL = `${API_BASE_URL}/grocery/`
    let response = await axios.get(API_URL, { headers: authHeader() })
    return response.data
}


export async function deleteItem(itemId) {
    const API_URL = `${API_BASE_URL}/grocery/${itemId}`
    let response = await axios.delete(API_URL, { headers: authHeader() })
    return response.data
}

export async function createItem(title, desc = "", quantity = 1) {
    const API_URL = `${API_BASE_URL}/grocery/`
    let response = await axios.post(API_URL, {
        title: title,
        desc: desc,
        quantity: quantity
    }, {
        headers: authHeader()
    })
    return response.data
}