import { useContext } from "react"
import ProfileSummary from "./ProfileSummary.jsx"
import "./scss/profile-summary-list.scss"

function ProfileSummaryList({profiles}) {
    return (
        <>
            <div className="profile-summary_list">
                <div className="profile-summary_list__header">
                    <span className="profile-summary_list__header_info">
                        Sugerencias para ti
                    </span>
                    <span className="profile-summary_list__header_see-all">
                        Ver todo
                    </span>
                </div>
                {profiles.map((profile, index ) => {
                    return <ProfileSummary
                            key={profile.id}
                            username={profile.username}
                            fullname={profile.fullname}
                            urlimage={profile.image}
                        />
                })}
            </div>
        </>
    )
}

export default ProfileSummaryList