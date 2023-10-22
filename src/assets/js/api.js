export function get(url) {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include'
        };
    
        fetch(url, requestOptions)
            .then(response => {
                if (response.status == 401) {
                    location.href = "/login"
                }
                if (response.ok) {
                    return response.json()
                }
            })
            .then(result => {
                resolve(result)
            })
            .catch(error => reject(error));

    })
}