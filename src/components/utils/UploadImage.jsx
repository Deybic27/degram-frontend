import { useContext, useRef } from "react"

function UploadImage({context}) {
    const { setImage, setModal } = useContext(context);
    const hiddenFileInput = useRef(null)
    const findImage = (e) => {
        e.preventDefault()
        hiddenFileInput.current.click()
    }

    const handleChange = (e) => {
        const image = e.target.files[0]
        upload(image)
            .then(response => setImage(MEDIA_HOST + response.replaceAll('"', "")))
            .catch(error => error)
            setModal(<></>)
    }

    const upload = (image) => {
        return new Promise((resolve, reject) => {
            var myHeaders = new Headers();
    
            var formdata = new FormData();
            formdata.append("image", image, image.name);
    
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow',
                credentials: 'include'
            };
    
            fetch("http://127.0.0.1:8000/api/v1/medias/user/upload", requestOptions)
            .then(response => response.text())
            .then(result => resolve(result))
            .catch(error => reject(error));
        })
    }
    return (
        <>
            <a
                type="file"
                onClick={findImage}
                className="modal-body_btn"
                >
                Subir foto
            </a>
            <input 
                onChange={handleChange}
                accept="image/jpeg,image/png"
                type="file"
                ref={hiddenFileInput}
                />
        </>
    )
}

export default UploadImage