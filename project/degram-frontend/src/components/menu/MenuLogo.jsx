import "./scss/menu-logo.scss"
import degramLogo from '/logoDegram.png'

function MenuLogo() {
    const logoUrl = "https://deybicrojas.com/image/logodr.png"
    return (
        <>
            <ul className="logo">
                <img
                    className="logo__image" 
                    src={degramLogo}
                    alt="Logo" />

                <span className="logo__image-mobile material-symbols-outlined">
                    view_comfy_alt
                </span>
            </ul>
        </>
    )
}

export default MenuLogo