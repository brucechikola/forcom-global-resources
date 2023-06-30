// Default API Configurations
export let API_CONFIG = {
    request_type: 'GET',
    base_endpoint: 'http://startapperp:8000/api/method/startapperp.client.index',
    request_endpoint: '',
    headers: {},
    body: '',
    request_types: {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        update: 'UPDATE',
        delete: 'DELETE',
    },
    status_codes: {
        success: 200,
        not_found: 404,
        server_error: 500,
        request_error: 501,
    },
    endpoint_extensions: {
        packages: '.get_module_groups',
        license: '.get_license',
        common_settings: '.get_common_settings',
        kyc_info: '.get_kyc_info',
        register: '.register',
    },

}

// call this function to configure your API Request

export const API_SETUP = (params) => {
    const { request_type, headers, body, endpoint_extension } = params
    API_CONFIG.request_endpoint = endpoint_extension
    API_CONFIG.request_type = API_CONFIG.request_types[request_type.toLowerCase().trim()]
    API_CONFIG.headers = headers || ''
    API_CONFIG.body = body || ''
    return API_CONFIG
}
