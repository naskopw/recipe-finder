import axios from "axios";
import authHeader from "./AuthStorage";

export default class CalendarService {

    static async getForDay(date) {
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1)}-${date.getDate()}`
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/planning/date?for=${dateStr}`
        let response = await axios.get(API_URL, {headers: authHeader()})
        return response.data
    }

    static async deletePlan(_id) {
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/planning/${_id}`
        let response = await axios.delete(API_URL, {headers: authHeader()})
        return response.data
    }
}