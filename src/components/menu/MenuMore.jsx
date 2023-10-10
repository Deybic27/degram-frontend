import MenuItem from "./MenuItem"
import "./scss/menu-more.scss"

function MenuMore() {
    return (
        <>
            <ul className="more">
                <MenuItem
                    icon="menu"
                    text="Más"
                />
            </ul>
        </>
    )
}

export default MenuMore