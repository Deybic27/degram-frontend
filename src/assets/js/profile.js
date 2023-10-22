import * as api from "./api"

export function getData() {
    return new Promise(async (resolve, reject) => {
        await api.get("http://127.0.0.1:8000/api/v1/users/profile/info")
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}