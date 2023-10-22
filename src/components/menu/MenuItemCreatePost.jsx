import { Link } from "react-router-dom"
import "./scss/menu-item.scss"
import { createContext, useState } from "react"
import { Modal } from "../utils/modal/Modal"
import CreatePost from "../utils/create-post/CreatePost";

const MenuItemCreatePostContext = createContext();

function MenuItemCreatePost({icon, text, id, link}) {
    const [modal, setModal] = useState("")

    const handleClick = () => {
        const modal = <Modal context={MenuItemCreatePostContext} open={true} title="Crear Publicación">
                <CreatePost></CreatePost>
            </Modal>
        setModal(modal)
    }
    return (
        <>
            <Link onClick={handleClick}>
                <li className={`${id} item`}>
                    <span className="item__icon material-symbols-outlined">{icon}</span>
                    <span className="item__text">{text}</span>
                </li>
            </Link>
            <MenuItemCreatePostContext.Provider value={{setModal}} >
                {modal}
            </MenuItemCreatePostContext.Provider>
        </>
    )
}

export default MenuItemCreatePost