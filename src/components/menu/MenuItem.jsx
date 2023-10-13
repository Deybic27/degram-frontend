import { Link } from "react-router-dom"
import "./scss/menu-item.scss"

function MenuItem({icon, text, profile, id, link}) {

    if (profile) {
        const profileImage = "https://deybicrojas.com/image/portfolio/imgPerfil.jpg"
        return (
            <>
                <a href={link}>
                <li className={`${id} item`}>
                    <span className="item__content-image">
                        <img
                            className="item__content-image_img"
                            src={`${profileImage}`}
                            alt={`${profile}`} />
                    </span>
                    <span className="item__text">{text}</span>
                </li>
                </a>
            </>
        )
    }

    return (
        <>
            <Link to={link}>
                <li className={`${id} item`}>
                    <span className="item__icon material-symbols-outlined">{icon}</span>
                    <span className="item__text">{text}</span>
                </li>
            </Link>
        </>
    )
}

export default MenuItem