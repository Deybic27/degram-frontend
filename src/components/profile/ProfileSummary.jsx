import "./scss/profile-summary.scss"

function ProfileSummary() {
    return (
        <>
            <article className="profile-summary">
                <span className="profile-summary__image">
                    <img
                        className="profile-summary__image_img" 
                        src="/maluma.jpg"
                        alt="Maluma" />
                </span>
                <div className="profile-summary__info">
                    <span className="profile-summary__info_user">
                        <strong>maluma</strong>
                    </span>
                    <span className="profile-summary__info_mutual">
                        paulaleon27
                    </span>
                </div>
                <span className="profile-summary__follow">
                    <b>Seguir</b>
                </span>
            </article>
        </>
    )
}

export default ProfileSummary