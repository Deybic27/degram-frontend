import { createContext, useRef, useState } from "react"

import "./scss/create-post.scss"
import ImageSettings from "./ImageSettings"

const CreatePostContext = createContext()

function CreatePost() {
    const formatImageDefault = {width: "400px", height: "400px"}
    const [imagePost, setImagePost] = useState(<></>)
    const [formatImage, setFormatImage] = useState(formatImageDefault)
    const [hideBtn, setHideBtn] = useState("")
    const [hideImg, setHideImg] = useState("hidden")
    const hiddenFileInput = useRef(null)
    const findImage = (e) => {
        e.preventDefault()
        hiddenFileInput.current.click()
    }
    const handleChange = (e) => {
        const file = e.target.files[0]
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(e){
            var image = new Image()
            image.src = reader.result            
            
            setImagePost(image);
            setHideBtn("hidden");
            setHideImg("");

        }.bind(this);
    }

    return (
        <>
            <a
                type="file"
                onClick={findImage}
                className={`modal-body_btn ${hideBtn}`}
                >
                Subir foto
            </a>
            <div className={`post-image ${hideImg}`}>
                <div className={`post-image_container`} style={{width: formatImage.width, height: formatImage.height}}>
                    <img
                        style={{height: imagePost.height, width: imagePost.width}}
                        className="post-image_container_img"
                        src={imagePost.src}
                        alt="" />
                </div>
                <CreatePostContext.Provider value={{setFormatImage, formatImageDefault}}>
                    <ImageSettings context={CreatePostContext}></ImageSettings>
                </CreatePostContext.Provider>
            </div>
            <input 
                onChange={handleChange}
                accept="image/jpeg,image/png"
                type="file"
                ref={hiddenFileInput}
                />
        </>
    )
}

export default CreatePost