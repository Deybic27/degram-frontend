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
                // if (response.status == 401) {
                // }
                if (response.ok) {
                    return response.json()
                }
                location.href = "/login"
            })
            .then(result => {
                resolve(result)
            })
            .catch(error => reject(error));

    })
}

export function post(url, formdata) {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
            credentials: 'include'
        };
    
        fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.text()
            }
            // location.href = "/login"
        })
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
}