import { useEffect, useState } from "react"
import MenuItem from "./MenuItem.jsx"
import "./scss/menu-list-items-left.scss"
import MenuItemProfile from "./MenuItemProfile.jsx"
import MenuItemCreatePost from "./MenuItemCreatePost.jsx"
import * as profile from "./../../assets/js/profile"

function MenuListItemsLeft(){
    const [propsProfile, setPropsProfile] = useState({})

    useEffect(() => {
        profile.getData()
            .then(data => {
                const props = {
                    id: "profile",
                    profile: data.username,
                    text: "Perfil",
                    link: "/profile",
                    profileImage: MEDIA_HOST + data.image
                }
                setPropsProfile(props)

            })
    },[profile])
    return (
        <>
            <ul className="list_items">
                <MenuItem 
                    id="home"
                    icon="home"
                    text="Inicio"
                    link="/"
                />
                <MenuItem
                    id="search"
                    icon="search"
                    text="Buscar"
                />
                <MenuItem 
                    id="explore"
                    icon="explore"
                    text="Explorar"
                    link=""
                />
                <MenuItem 
                    id="reels"
                    icon="movie"
                    text="Reels"
                    link=""
                />
                <MenuItem 
                    id="chat"
                    icon="chat"
                    text="Mensajes"
                    link=""
                />
                <MenuItem 
                    id="notifications"
                    icon="favorite"
                    text="Notificaciones"
                    link=""
                />
                <MenuItemCreatePost
                    id="upload"
                    icon="add_box"
                    text="Crear"
                    link=""
                />
                <MenuItemProfile
                    {...propsProfile}
                    // id="profile"
                    // profile="1234"
                    // text="Perfil"
                    // link="/profile"
                    >
                </MenuItemProfile>
            </ul>
        </>
    )
}

export default MenuListItemsLeft