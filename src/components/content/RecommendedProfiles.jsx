import ProfileSummaryList from "../profile/ProfileSummaryList.jsx"

import "./scss/recommended-profiles.scss"
import { recommendedProfiles } from "./js/recommended-profiles.js"
import { createContext, useEffect, useState } from "react"


function RecommendedProfile() {
    const [ profiles, setProfiles ] = useState([])
    useEffect(() => {
        recommendedProfiles()
            .then(data => {
                setProfiles(data)
            })
    }, []);
    return (
        <>
            <div className="recommend-profiles">
                <ProfileSummaryList profiles={profiles} />
            </div>
        </>
    )
}

export default RecommendedProfile