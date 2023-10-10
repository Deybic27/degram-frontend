import "./scss/post-header.scss"

function PostHeader() {
    return (
        <>
            <div className="post-header">
                <span className="post-header__image">
                    <img className="post-header__image_img" src="/maluma.jpg" alt="Maluma" />
                </span>
                <span className="post-header__user">
                    maluma
                </span>
                <span className="post-header__elapsed_time">
                    2d
                </span>
                <span className="post-header__more material-symbols-outlined">
                    more_horiz
                </span>
            </div>
        </>
    )
}


export default PostHeader