import MenuItem from "./MenuItem.jsx"
import "./scss/menu-list-items-left.scss"

function MenuListItemsLeft(){
    return (
        <>
            <ul className="list_items">
                <MenuItem 
                    id="home"
                    icon="home"
                    text="Inicio"
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
                />
                <MenuItem 
                    id="reels"
                    icon="movie"
                    text="Reels"
                />
                <MenuItem 
                    id="chat"
                    icon="chat"
                    text="Mensajes"
                />
                <MenuItem 
                    id="notifications"
                    icon="favorite"
                    text="Notificaciones"
                />
                <MenuItem 
                    id="upload"
                    icon="add_box"
                    text="Crear"
                />
                <MenuItem 
                    id="profile"
                    profile="1234"
                    text="Perfil"
                />
            </ul>
        </>
    )
}

export default MenuListItemsLeft