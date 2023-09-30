import MenuListItemsLeft from "./MenuListItemsLeft"
import MenuLogo from "./MenuLogo"
import MenuMore from "./MenuMore.jsx"
import "./scss/menu-left.scss"

function MenuLeft() {
    return (
    <>
        <div className="menu-left">
            <MenuLogo />
            <MenuListItemsLeft />
            <MenuMore />
        </div>
    </>
    )
}

export default MenuLeft