import { Link } from "react-router-dom"
import "./scss/menu-item.scss"

function MenuItemProfile(props) {
    return (
        <>
            <Link to={props.link} className={`${props.id}`}>
            <li className={`item`}>
                <span className="item__content-image">
                    <img
                        className="item__content-image_img"
                        src={`${props.profileImage}`}
                        alt={`Foto de perfil de ${props.profile}`} 
                        title={`Foto de perfil de ${props.profile}`} 
                        />
                </span>
                <span className="item__text">{props.text}</span>
            </li>
            </Link>
        </>
    )
}

export default MenuItemProfile