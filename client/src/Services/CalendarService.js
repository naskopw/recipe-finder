import axios from "axios";
import authHeader from "./AuthStorage";

export default class CalendarService {

    static async getForDay(date) {
        let newDate = date
        newDate.setDate(date.getDate() + 1)
        let dateStr = newDate.toISOString().slice(0, date.toISOString().indexOf('T'))

        console.log(date, dateStr)
        const API_URL = `${process.env.REACT_APP_API_BASE_URL}/planning/date?for=${dateStr}`
        let response = await axios.get(API_URL, {headers: authHeader()})
        return response.data
    }
}