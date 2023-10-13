import { createContext, useContext } from "react"
import UploadImage from "../utils/UploadImage"
import { Modal, handleOpenModal } from "../utils/modal/Modal"

const ProfileImageContext = createContext()

function ProfileImage({context}) {
    const {image, setImage } = useContext(context)
    return (
        <>
            <img
                onClick={handleOpenModal}
                className="profile-info__image_img" 
                src={image}
                alt="" />
            <Modal>
                <ProfileImageContext.Provider value={{image, setImage}}>
                    <UploadImage context={ProfileImageContext} />
                </ProfileImageContext.Provider>
            </Modal>
        </>
    )
}

export default ProfileImage