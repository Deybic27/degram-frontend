import * as api from "./../../../../assets/js/api"

export function createPost(file, image_format, description) {
    return new Promise(async (resolve, reject) => {

        let formdata = new FormData();
        formdata.append("image", file, file.name);
        formdata.append("image_format", image_format);
        formdata.append("description", description);

        await api.post("http://127.0.0.1:8000/api/v1/post", formdata)
            .then(result => resolve(result))
            .catch(error => reject(error))
    })
}