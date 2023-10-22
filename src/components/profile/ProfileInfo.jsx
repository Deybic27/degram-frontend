import "./scss/profile-info.scss"
import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";
import * as profile from "./../../assets/js/profile"

const ProfileInfoContext = createContext();

function ProfileInfo() {

    const [username, setUsername] = useState();
    const [image, setImage] = useState();
    const [fullname, setFullName] = useState();
    const [description, setDescription] = useState();
    const [link, setLink] = useState();
    const [linkText, setLinkText] = useState();

    useEffect(() => {
        profile.getData()
            .then(data => {    
                setUsername(data.username)
                setImage(MEDIA_HOST + data.image)
                setFullName(data.fullname)
                setDescription(data.description)
                setLink(data.link)
                setLinkText(data.link_text)
            })
        })

    
    return(
        <div className="profile-info">
            <span className="profile-info__image">
                <ProfileInfoContext.Provider value={{image, setImage}}>
                    <ProfileImage context={ProfileInfoContext} />
                </ProfileInfoContext.Provider>
            </span>
            <div className="profile-info__content">
                <div className="profile-info__content_header">
                    <h2 className="profile-info__content_title">{username}</h2>
                    <Link
                        to="edit"
                        state={{ edit: true }}
                        className="profile-info__content_btn btn-secondary edit">
                            Editar perfil
                    </Link>
                    <a className="profile-info__content_btn btn-secondary follow">Seguir</a>
                    <a className="profile-info__content_btn btn-secondary message">Enviar mensaje</a>
                </div>
                <div className="profile-info__content_data">
                    <span className="item">
                        <strong>147</strong>
                        <span className="item_text">publicaciones</span>
                    </span>
                    <span className="item">
                        <strong>63,4 M</strong>
                        <span className="item_text">seguidores</span>
                    </span>
                    <span className="item">
                        <strong>272</strong>
                        <span className="item_text">seguidos</span>
                    </span>
                </div>
                <div className="profile-info__content_info">
                    <h2 className="">{fullname}</h2>
                    <p className="">{description}</p>
                    <a className="link" target="_blank" href={link}>{linkText}</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo