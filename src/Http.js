export class Http {
    static HEADERS = { 'Content-Type': 'application/json' }

    static async get(url){
        try {
            return await request(url)   
        } catch (error) {
            console.log(error)
        }
    }

    static async post(url, body){
        try {
            return await request(url, body)   
        } catch (error) {
            console.log(error)
        }
    }

    static async patch(url, body){
        try {
            return await request(url, body)   
        } catch (error) {
            console.log(error)
        }
    }

    static async delete(url){
        try {
            return await request(url)   
        } catch (error) {
            console.log(error)
        }
    }
}

const request = async (url, method = 'GET', body = {}) => {
    const config = {
        method,
        headers: Http.HEADERS
    }

    if(method === 'POST' || method === 'PATCH'){
        config.body = JSON.stringify(body)
    }

    const res = await fetch(url, config)

    return await res.json()
}