import ProfileSummaryList from "../profile/ProfileSummaryList.jsx"

import "./scss/recommended-profiles.scss"

function RecommendedProfile() {
    return (
        <>
            <div className="recommend-profiles">
                <ProfileSummaryList />
            </div>
        </>
    )
}

export default RecommendedProfile