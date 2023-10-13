import MenuLeft from "./components/menu/MenuLeft"
import Edit from "./components/profile/Edit"
import "./scss/profile.scss"

function ProfileEdit() {
    return(
        <div className="feed-profile-edit">
            <MenuLeft />
            <Edit />
        </div>
    )
}

export default ProfileEdit