import ProfileSummary from "./ProfileSummary.jsx"
import "./scss/profile-summary-list.scss"

function ProfileSummaryList() {
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
                <ProfileSummary />
                <ProfileSummary />
                <ProfileSummary />
                <ProfileSummary />
                <ProfileSummary />
                <ProfileSummary />
                <ProfileSummary />
            </div>
        </>
    )
}

export default ProfileSummaryList