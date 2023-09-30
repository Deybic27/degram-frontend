import "./scss/post-footer.scss"

function PostFooter() {
    return (
        <>
            <div className="post-footer">
                <span className="post-footer__like material-symbols-outlined">
                    favorite
                </span>
                <span className="post-footer__comment material-symbols-outlined">
                    comment
                </span>
                <span className="post-footer__share material-symbols-outlined">
                    send
                </span>
                <span className="post-footer__save material-symbols-outlined">
                    bookmark
                </span>
            </div>
        </>
    )
}

export default PostFooter