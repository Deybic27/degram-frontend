import { useLocation } from "react-router-dom";
import MenuLeft from "./components/menu/MenuLeft"
import Content from "./components/profile/Content"
import "./scss/profile.scss"
import Edit from "./components/profile/Edit";
import { createContext } from "react";

const ProfileContext = createContext()

function Profile() {

    let element = <Content />
    let { state } = useLocation();
    if(state && state.edit) {
        element = <Edit />
    }

    return(
        <div className="feed-profile">
            <MenuLeft />
            {element}
        </div>
    )
}

export default Profile