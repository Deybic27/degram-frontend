import "./scss/post-header.scss"

function PostHeader({image, username, time}) {
    return (
        <>
            <div className="post-header">
                <span className="post-header__image">
                    <img className="post-header__image_img" src={`${MEDIA_HOST}/${image}`} alt="Maluma" />
                </span>
                <span className="post-header__user">
                    {username}
                </span>
                <span className="post-header__elapsed_time">
                    {time}
                </span>
                <span className="post-header__more material-symbols-outlined">
                    more_horiz
                </span>
            </div>
        </>
    )
}


export default PostHeader