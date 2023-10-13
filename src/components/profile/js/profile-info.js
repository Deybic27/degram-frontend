export function getUserInfo() {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include'
        };
    
        fetch("http://127.0.0.1:8000/api/v1/users/profile/info", requestOptions)
            .then(response => {
                if (response.status == 401) {
                    location.href = "/login"
                }
                if (response.status == 200) {
                    return response.json()
                }
            })
            .then(result => {
                resolve(result)
            })
            .catch(error => reject(error));

    })
}