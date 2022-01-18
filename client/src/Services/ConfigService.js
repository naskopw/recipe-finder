class ConfigService {

    getBaseURL() {
        return process.env.REACT_APP_API_BASE_URL !== undefined ?
            process.env.REACT_APP_API_BASE_URL : "http://localhost:8080/api/v1"
    }

}
export default new ConfigService();