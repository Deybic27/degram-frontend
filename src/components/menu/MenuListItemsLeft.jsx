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
                <MenuItem 
                    id="upload"
                    icon="add_box"
                    text="Crear"
                    link=""
                />
                <MenuItem 
                    id="profile"
                    profile="1234"
                    text="Perfil"
                    link="/profile"
                />
            </ul>
        </>
    )
}

export default MenuListItemsLeft