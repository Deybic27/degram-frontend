import "./scss/menu-item.scss"

function MenuItem({icon, text, profile, id}) {

    if (profile) {
        const profileImage = "https://deybicrojas.com/image/portfolio/imgPerfil.jpg"
        return (
            <>
                <li className={`${id} item`}>
                    <span className="item__content-image">
                        <img
                            className="item__content-image_img"
                            src={`${profileImage}`}
                            alt={`${profile}`} />
                    </span>
                    <span className="item__text">{text}</span>
                </li>
            </>
        )
    }

    return (
        <>
            <li className={`${id} item`}>
                <span className="item__icon material-symbols-outlined">{icon}</span>
                <span className="item__text">{text}</span>
            </li>
        </>
    )
}

export default MenuItem