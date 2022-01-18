import axios from "axios";
import authHeader from "./AuthStorage";
import ConfigService from "./ConfigService"

export default class CalendarService {

    static async getForDay(date) {
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1)}-${date.getDate()}`
        const API_URL = `${ConfigService.getBaseURL()}/planning/date?for=${dateStr}`
        let response = await axios.get(API_URL, { headers: authHeader() })
        return response.data
    }

    static async deletePlan(_id) {
        const API_URL = `${ConfigService.getBaseURL()}/planning/${_id}`
        let response = await axios.delete(API_URL, { headers: authHeader() })
        return response.data
    }

    static async planMeal(recipeId, date, partOfTheDay) {
        const API_URL = `${ConfigService.getBaseURL()}/planning/${recipeId}`
        let response = await axios.post(API_URL, {
            date: date,
            partOfTheDay: partOfTheDay
        }, { headers: authHeader() })
        return response.data
    }
}