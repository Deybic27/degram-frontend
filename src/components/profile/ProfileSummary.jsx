import "./scss/profile-summary.scss"

function ProfileSummary({username, fullname, urlimage}) {
    return (
        <>
            <article className="profile-summary">
                <span className="profile-summary__image">
                    <img
                        className="profile-summary__image_img" 
                        src={`${MEDIA_HOST}/${urlimage}`}
                        alt="Maluma" />
                </span>
                <div className="profile-summary__info">
                    <span className="profile-summary__info_user">
                        <strong>{fullname}</strong>
                    </span>
                    <span className="profile-summary__info_mutual">
                        {username}
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