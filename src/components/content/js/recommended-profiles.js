import * as api from "../../../assets/js/api"

export function recommendedProfiles() {
    return new Promise(async (resolve, reject) => {
        await api.get("http://127.0.0.1:8000/api/v1/recommended/users")
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}