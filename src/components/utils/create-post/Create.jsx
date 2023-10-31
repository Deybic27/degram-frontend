import { createContext, useContext, useRef, useState } from "react"

import "./scss/create-post.scss"
import ImageSettings from "./ImageSettings"
import { createPost } from "./js/create-post"
import Status from "./Status"

const CreateContext = createContext()

function Create({context}) {
    const { setStep } = useContext(context)

    const formatImageDefault = {type: "1_1", width: "400px", height: "400px"}
    const [imagePost, setImagePost] = useState(<></>)
    const [file, setFile] = useState(<></>)
    const [formatImage, setFormatImage] = useState(formatImageDefault)
    const [hideBtn, setHideBtn] = useState("")
    const [hideBtnNext, setHideBtnNext] = useState("hidden")
    const [hideBtnBack, setHideBtnBack] = useState("hidden")
    const [hideBtnPublish, setHideBtnPublish] = useState("hidden")
    const [hideImg, setHideImg] = useState("hidden")
    const [hideSettings, setHideSettings] = useState("hidden")
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
            
            setFile(file)
            setImagePost(image);
            setHideBtn("hidden");
            setHideBtnNext("");
            setHideImg("");

        }.bind(this);
    }

    const prePublish = () => {
        console.log("Show post settings");
        setHideSettings("")
        setHideImg("hidden");
        setHideBtnNext("hidden")
        setHideBtnBack("")
        setHideBtnPublish("")
    }

    const back = () => {
        setHideImg("");
        setHideBtnNext("")
        setHideSettings("hidden")
        setHideBtnBack("hidden")
        setHideBtnPublish("hidden")
    }

    const handlePublish = () => {
        const description = document.getElementById("description")
        // console.log("Publicando...");
        // console.log(file);
        // console.log(description.value);
        // console.log(formatImage.type);
        createPost(file, formatImage.type, description.value)
            .then(result => {
                setStep(<Status type="success" />)
            })
            .catch(error => error)
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
            <main className={`post`}>
                <section className={`post_options`}>
                    <a
                        onClick={prePublish}
                        className={`post_options_btn ${hideBtnNext}`}
                        >
                        Siguiente
                    </a>
                    <a
                        onClick={back}
                        className={`post_options_btn ${hideBtnBack}`}
                        >
                        Atrás
                    </a>
                    <a
                        onClick={handlePublish}
                        className={`post_options_btn ${hideBtnPublish}`}
                        >
                        Publicar
                    </a>
                </section>
                <section className={`post_container`}>
                    <div className={`post_container-image ${hideImg}`}>
                        <div className={`post_container-image_container`} style={{width: formatImage.width, height: formatImage.height}}>
                            <img
                                style={{height: imagePost.height, width: imagePost.width}}
                                className="post_container-image_container_img"
                                src={imagePost.src}
                                alt="" />
                            <CreateContext.Provider value={{setFormatImage, formatImageDefault}}>
                                <ImageSettings context={CreateContext}></ImageSettings>
                            </CreateContext.Provider>
                        </div>
                    </div>
                    <div className={`post_container-settings ${hideSettings}`}>
                        <textarea id="description" className={`post_container-settings_desc ${hideSettings}`} placeholder="Escribe una descripción..."></textarea>
                    </div>
                </section>
            </main>
            <input 
                onChange={handleChange}
                accept="image/jpeg,image/png"
                type="file"
                ref={hiddenFileInput}
                />
        </>
    )
}

export default Create