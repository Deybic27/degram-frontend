import { Link } from "react-router-dom"
import "./scss/menu-item.scss"

function MenuItem({icon, text, id, link}) {
    return (
        <>
            <Link to={link} className={`${id}`}>
                <li className={`item`}>
                    <span className="item__icon material-symbols-outlined">{icon}</span>
                    <span className="item__text">{text}</span>
                </li>
            </Link>
        </>
    )
}

export default MenuItem