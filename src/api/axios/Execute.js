import { API_CONFIG, API_SETUP } from "api/config"
import axios from "axios"
export default class Execute {
    configure(props) {
        const { request_type = 'GET', headers = {}, body = {}, endpoint_extension } = props
        if (!endpoint_extension) {
            console.error("Please provide endpoint extension parameter object in 'get' function: e.g:: new Execute().get({endpoint_extension:'/your_file'})")
            return
        }
        API_SETUP({
            request_type: request_type,
            endpoint_extension: endpoint_extension,
            headers: headers,
            body: body
        })
    }
    async request() {
        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.withCredentials = true
        API_CONFIG.headers['Content-Type'] = 'application/json'
        const url = `${API_CONFIG.base_endpoint}${API_CONFIG.request_endpoint}`
        switch (API_CONFIG.request_type) {
            case API_CONFIG.request_types.get:
                return await axios.get(url, { headers: API_CONFIG.headers })
            case API_CONFIG.request_types.post:
                return await axios.post(url, { headers: API_CONFIG.headers, data: API_CONFIG.body })
            case API_CONFIG.request_types.update:
                return await axios.put(url, { headers: API_CONFIG.headers, body: JSON.stringify(API_CONFIG.body) })
            case API_CONFIG.request_types.delete:
                return await axios.delete(url, { headers: API_CONFIG.headers, body: JSON.stringify(API_CONFIG.body) })
            default:
                console.error("Unknown request type")
                break;
        }
    }
    async get(params) {
        this.configure({
            request_type: API_CONFIG.request_types.get,
            endpoint_extension: params.endpoint_extension,
        })
        return await this.request()
    }
    async post(params) {
        this.configure({
            request_type: API_CONFIG.request_types.post,
            endpoint_extension: params.endpoint_extension,
            body: params.body
        })
        return await this.request()
    }
    async update(params) {
        console.log("updating")
    }
    async delete(params) {
        console.log("deleting")
    }
}