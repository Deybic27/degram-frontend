import { createContext, useContext, useState } from "react"
import UploadImage from "../utils/UploadImage"
import { Modal } from "../utils/modal/Modal"

const ProfileImageContext = createContext()

function ProfileImage({context}) {
    const {image, setImage } = useContext(context)

    const [modal, setModal] = useState("")

    const handleClick = () => {
        const modal = <Modal context={ProfileImageContext} open={true} title="Cambiar foto" >
                <ProfileImageContext.Provider value={{image, setImage, setModal}}>
                    <UploadImage context={ProfileImageContext} />
                </ProfileImageContext.Provider>
            </Modal>
        setModal(modal)
    }
    return (
        <>
            <img
                onClick={handleClick}
                className="profile-info__image_img" 
                src={image}
                alt="" />
            <ProfileImageContext.Provider value={{setModal}}>
                {modal}
            </ProfileImageContext.Provider>
        </>
    )
}

export default ProfileImage